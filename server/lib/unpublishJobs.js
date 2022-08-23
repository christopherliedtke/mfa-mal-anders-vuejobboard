const { Job } = require("../database/models/job");
const sendJobAdUnpublishedEmail = require("./sendJobAdUnpublishedEmail");

module.exports.unpublishJobs = async () => {
  try {
    console.log("Unpublishing Jobs...");

    await sendJobAdUnpublishedEmail();

    await Job.updateMany(
      {
        $or: [
          { paid: true },
          { stripeInvoiceStatus: "paid" },
          { stripeInvoiceStatus: "open" },
        ],
        paidExpiresAt: {
          $lt: new Date(),
        },
        status: "published",
      },
      { paid: false, stripeInvoiceStatus: "", status: "unpublished" }
    );
  } catch (error) {
    console.log("Error on unpublishJobs CRON: ", error);
  }
};
