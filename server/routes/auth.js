const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cryptoRandomString = require("crypto-random-string");
const { User } = require("../database/models/user");
const { Code } = require("../database/models/secretCode");
const { Company } = require("../database/models/company");
const { Job } = require("../database/models/job");
const { hash, compare } = require("../utils/bcrypt");
const emailService = require("../utils/nodemailer");
const verifyToken = require("../middleware/verifyToken");
const s3 = require("../middleware/s3");
const config = require("../config/config");
const errorMsg = require("../config/errorMsg");
const emailTemplate = require("../utils/emailTemplate");

// #route:  Get /user-by-token
// #desc:   Get user from token
// #access: Public
router.get("/user-by-token", verifyToken, (req, res) => {
    res.json({ user: req.user });
});

// #route:  GET /user-by-db
// #desc:   Get user from database
// #access: Public
router.get("/user-by-db", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            res.json({ success: false, token: false });
        } else {
            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            req.session.token = token;

            res.json({
                success: true,
                token,
            });
        }
    } catch (err) {
        console.log(
            "Error on /api/auth/verification/update-user-status: ",
            err
        );
        res.json({ success: false });
    }
});

// #route:  POST /login
// #desc:   Login a user
// #access: Public
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let errors = [];

    if (!email || !password) {
        errors.push({ msg: errorMsg.auth.fillAll });
        res.json({ success: false, errors });
    } else {
        try {
            const user = await User.findOne({ email: email });

            if (!user) {
                errors.push({
                    msg: errorMsg.auth.noMatch,
                });
                res.json({ success: false, token: false, errors });
            } else {
                const pwCheckSuccess = await compare(password, user.password);

                if (!pwCheckSuccess) {
                    errors.push({
                        msg: errorMsg.auth.noMatch,
                    });
                    res.json({ success: false, token: false, errors });
                } else {
                    const token = jwt.sign(
                        {
                            user: {
                                _id: user._id,
                                role: user.role,
                                isEmployer: user.isEmployer,
                                isAdmin: user.isAdmin,
                                status: user.status,
                                gender: user.gender,
                                title: user.title,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                            },
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 60 * 60 * 24 * 7,
                        }
                    );

                    req.session.token = token;

                    res.json({
                        success: true,
                        token,
                    });
                }
            }
        } catch (err) {
            console.log("Error on /api/auth/login: ", err);
            res.json({ success: false, token: false });
        }
    }
});

// #route:  POST /register
// #desc:   Register a new user
// #access: Public
router.post("/register", async (req, res) => {
    const {
        gender,
        title,
        firstName,
        lastName,
        email,
        password,
        password2,
        acceptance,
    } = req.body;

    let errors = [];

    // Check if data is correctly provided
    if (!firstName || !lastName || !email || !password || !password2) {
        errors.push({ msg: errorMsg.auth.fillAll });
    }
    if (password != password2) {
        errors.push({ msg: errorMsg.auth.pwsNoMatch });
    }
    if (
        !password.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/
        )
    ) {
        errors.push({
            msg: errorMsg.auth.pwRequirements,
        });
    }
    if (acceptance != "accepted") {
        errors.push({ msg: errorMsg.auth.termsOfUse });
    }

    if (errors.length > 0) {
        res.json({ success: false, token: false, errors });
    } else {
        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email: email });

            if (existingUser) {
                errors.push({
                    msg: errorMsg.auth.emailRegistered,
                });
                res.json({ success: false, token: false, errors });
            } else {
                const hashedPw = await hash(password);

                const newUser = new User({
                    gender,
                    title,
                    firstName,
                    lastName,
                    email,
                    isEmployer: true,
                    password: hashedPw,
                    accepted: true,
                });

                const user = await newUser.save();
                const token = jwt.sign(
                    {
                        user: {
                            _id: user._id,
                            role: user.role,
                            isEmployer: user.isEmployer,
                            isAdmin: user.isAdmin,
                            status: user.status,
                            gender: user.gender,
                            title: user.title,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                        },
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: 60 * 60 * 24 * 7,
                    }
                );

                req.session.token = token;

                res.json({
                    success: true,
                    token,
                });
            }
        } catch (err) {
            console.log("Error on /api/auth/register: ", err);
            errors.push({
                msg: errorMsg.general,
            });
            res.json({ success: false, token: false, errors });
        }
    }
});

// #route:  GET /verification/get-activation-email
// #desc:   Send activation email to registered users email address
// #access: Private
router.get(
    "/verification/get-activation-email",
    verifyToken,
    async (req, res) => {
        console.log("get-activation-email");

        const baseUrl = req.protocol + "://" + req.get("host");

        try {
            const user = await User.findById(req.user._id);

            if (!user) {
                res.json({ success: false });
            } else {
                const data = {
                    from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                    to: user.email,
                    subject: `E-Mail bestätigen für ${config.website.name}`,
                    text: `
                        Bitte nutzen Sie den folgenden Link, um Ihren Account auf ${config.website.name} zu aktivieren: ${baseUrl}/api/auth/verification/verify-account/${user._id}
                    `,
                    html: emailTemplate.generate(`
                        <div 
                            style="color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.2; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px">
                            <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; mso-line-height-alt: 14px">
                                <h2>Aktivieren Sie Ihren Account bei ${config.website.name}</h2>
                                <p>
                                    Bitte nutzen Sie den folgenden Link, um Ihren Account auf ${config.website.name} zu aktivieren: 
                                </p>
                            </div>
                        </div>
                        <div
                            style="
                                text-decoration: none;
                                display: inline-block;
                                color: #f8faf9;
                                background-color: #fda225;
                                border-radius: 50px;
                                -webkit-border-radius: 50px;
                                -moz-border-radius: 50px;
                                width: auto;
                                width: auto;
                                border-top: 1px solid #fda225;
                                border-right: 1px solid #fda225;
                                border-bottom: 1px solid #fda225;
                                border-left: 1px solid #fda225;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                            "
                        >
                            <a 
                                style="padding-left: 20px; padding-right: 20px; font-size: 16px; display: inline-block; cursor: pointer; border: none; color: #f8faf9; text-decoration: none" href="${baseUrl}/api/auth/verification/verify-account/${user._id}" target="_blank"
                            >
                                <span 
                                    style="font-size: 16px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px"
                                >
                                    Account aktivieren
                                </span>
                            </a>
                        </div>
                    `),
                };

                const emailSent = await emailService.sendMail(data);
                console.log("sendMail() for activation email: ", emailSent);

                res.json({ success: true });
            }
        } catch (err) {
            console.log("Error on /api/auth/get-activation-email: ", err);
            res.json({ success: false });
        }
    }
);

// #route:  GET /verification/verify-account
// #desc:   Verify user's email address
// #access: Public
router.get("/verification/verify-account/:userId", async (req, res) => {
    let redirectPath, user;

    try {
        user = await User.findById(req.params.userId);

        if (!user) {
            console.log(
                `Error on /verify-account -> no user found for user._id ${req.params.userId}: `,
                user
            );
            redirectPath = `${process.env.WEBSITE_URL}/auth/account/verification?error=no-user`;
        } else {
            await User.updateOne({ email: user.email }, { status: "active" });

            redirectPath = `${process.env.WEBSITE_URL}/auth/account/verified`;
        }
    } catch (err) {
        console.log("Error on /api/auth/verification/verify-account: ", err);

        redirectPath = `${process.env.WEBSITE_URL}/auth/account/verification?error=server-error`;
    }

    res.redirect(redirectPath);
});

// #route:  POST /password-reset/get-code
// #desc:   Reset password of user
// #access: Public
router.post("/password-reset/get-code", async (req, res) => {
    const { email } = req.body;
    let errors = [];

    if (!email) {
        errors.push({
            msg: "Bitte gib deine registrierte E-Mail Adresse ein.",
        });
        res.json({ success: false, errors });
    } else {
        try {
            const user = await User.findOne({ email: email });

            if (!user) {
                errors.push({
                    msg: "Die angegebene E-Mail Adresse ist nicht registriert.",
                });
                res.json({ success: false, errors });
            } else {
                const secretCode = cryptoRandomString({
                    length: 6,
                });
                const newCode = new Code({
                    code: secretCode,
                    email: email,
                });
                await newCode.save();

                const data = {
                    from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                    to: email,
                    subject: `Ihr Code für den Passwort Reset auf ${config.website.name}`,
                    text: `
                        Bitte nutzen Sie den folgenden Code innerhalb der nächsten 60 Minuten, um Ihr Passwort auf ${config.website.name} zu ändern: ${secretCode}
                    `,
                    html: emailTemplate.generate(`
                        <p>Bitte nutzen Sie den folgenden Code innerhalb der nächsten 60 Minuten, um Ihr Passwort auf ${config.website.name} zu ändern: <strong>${secretCode}</strong></p>
                        `),
                };
                await emailService.sendMail(data);

                res.json({ success: true });
            }
        } catch (err) {
            console.log("Error on /api/auth/password-reset/get-code: ", err);
            errors.push({
                msg: errorMsg.general,
            });
            res.json({ success: false, errors });
        }
    }
});

// #route:  POST /password-reset/verify
// #desc:   Verify and save new password of user
// #access: Public
router.post("/password-reset/verify", async (req, res) => {
    const { email, password, password2, code } = req.body;
    let errors = [];

    if (!email || !password || !password2 || !code) {
        errors.push({ msg: errorMsg.auth.fillAll });
    }
    if (password != password2) {
        errors.push({ msg: errorMsg.auth.pwsNoMatch });
    }
    if (
        !password.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/
        )
    ) {
        errors.push({
            msg: errorMsg.auth.pwRequirements,
        });
    }
    if (errors.length > 0) {
        res.json({ success: false, errors });
    } else {
        try {
            const response = await Code.findOne({ email, code });

            if (!response) {
                errors.push({
                    msg: errorMsg.auth.codeIncorrect,
                });
                res.json({ success: false, errors });
            } else {
                const newHashedPw = await hash(password);
                await User.updateOne({ email }, { password: newHashedPw });
                await Code.deleteOne({ email, code });
                res.json({ success: true });
            }
        } catch (err) {
            console.log("Error on /api/auth/password-reset/verify: ", err);
            errors.push({
                msg: errorMsg.general,
            });
            res.json({ success: false, errors });
        }
    }
});

// #route:  GET /logout
// #desc:   Logout a user
// #access: Public
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// #route:  POST /delete-account
// #desc:   Logout a user
// #access: Public
router.post("/delete-account", verifyToken, async (req, res) => {
    const { password } = req.body;

    if (!password) {
        res.json({ success: false, error: errorMsg.auth.fillAll });
    } else {
        try {
            const user = await User.findById(req.user._id);

            if (!user) {
                res.json({
                    success: false,
                    error: errorMsg.general,
                });
            } else {
                const pwCheckSuccess = await compare(password, user.password);

                if (!pwCheckSuccess) {
                    res.json({
                        success: false,
                        error: errorMsg.auth.pwNoMatch,
                    });
                } else {
                    // delete images
                    const logoUrls = await Company.find(
                        { userId: req.user._id },
                        "logoUrl"
                    );
                    const imageUrls = await Job.find(
                        { userId: req.user._id },
                        "imageUrl"
                    );

                    const filesToDelete = [...logoUrls, ...imageUrls]
                        .map((element) =>
                            element.logoUrl || element.imageUrl
                                ? element.logoUrl || element.imageUrl
                                : null
                        )
                        .filter((element) => element)
                        .map((element) =>
                            element.split("/").slice(-1).join("")
                        );

                    await Promise.all(
                        filesToDelete.map((file) => s3.delete(file))
                    );

                    // delete jobs and companies
                    await Promise.all([
                        Job.deleteMany({
                            userId: req.user._id,
                        }),
                        Company.deleteMany({
                            userId: req.user._id,
                        }),
                    ]);

                    // delete user
                    const deleted = await User.deleteOne({
                        _id: req.user._id,
                    });

                    if (!deleted) {
                        res.json({
                            success: false,
                            error: errorMsg.general,
                        });
                    } else {
                        req.session = null;
                        res.json({ success: true });
                    }
                }
            }
        } catch (err) {
            console.log("Error on /api/auth/delete-account: ", err);
            res.json({
                success: false,
                error: errorMsg.general,
            });
        }
    }
});

module.exports = router;
