const config = require("../config/config.json");

module.exports = {
    generate: function (
        content,
        footer = "",
        headerImg = `${process.env.WEBSITE_URL}/img/MfaMalAnders_Banner_1200.jpg`,
        lightColor = "#fffcfd",
        primaryColor = "#6d0230"
    ) {
        // for templating https://beefree.io/
        return `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

            <html
                xmlns="http://www.w3.org/1999/xhtml"
                xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:v="urn:schemas-microsoft-com:vml"
            >
                <head>
                    <!--[if gte mso 9
                        ]><xml
                            ><o:OfficeDocumentSettings
                                ><o:AllowPNG /><o:PixelsPerInch
                                    >96</o:PixelsPerInch
                                ></o:OfficeDocumentSettings
                            ></xml
                        ><!
                    [endif]-->
                    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                    <meta content="width=device-width" name="viewport" />
                    <!--[if !mso]><!-->
                    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
                    <!--<![endif]-->
                    <title></title>
                    <!--[if !mso]><!-->
                    <!--<![endif]-->
                    <style type="text/css">
                        body {
                            margin: 0;
                            padding: 0;
                        }

                        table,
                        td,
                        tr {
                            vertical-align: top;
                            border-collapse: collapse;
                        }

                        * {
                            line-height: inherit;
                        }

                        a[x-apple-data-detectors="true"] {
                            color: inherit !important;
                            text-decoration: none !important;
                        }
                    </style>
                    <style id="media-query" type="text/css">
                        @media (max-width: 520px) {
                            .block-grid,
                            .col {
                                min-width: 320px !important;
                                max-width: 100% !important;
                                display: block !important;
                            }

                            .block-grid {
                                width: 100% !important;
                            }

                            .col {
                                width: 100% !important;
                            }

                            .col_cont {
                                margin: 0 auto;
                            }

                            img.fullwidth,
                            img.fullwidthOnMobile {
                                max-width: 100% !important;
                            }

                            .no-stack .col {
                                min-width: 0 !important;
                                display: table-cell !important;
                            }

                            .no-stack.two-up .col {
                                width: 50% !important;
                            }

                            .no-stack .col.num2 {
                                width: 16.6% !important;
                            }

                            .no-stack .col.num3 {
                                width: 25% !important;
                            }

                            .no-stack .col.num4 {
                                width: 33% !important;
                            }

                            .no-stack .col.num5 {
                                width: 41.6% !important;
                            }

                            .no-stack .col.num6 {
                                width: 50% !important;
                            }

                            .no-stack .col.num7 {
                                width: 58.3% !important;
                            }

                            .no-stack .col.num8 {
                                width: 66.6% !important;
                            }

                            .no-stack .col.num9 {
                                width: 75% !important;
                            }

                            .no-stack .col.num10 {
                                width: 83.3% !important;
                            }

                            .video-block {
                                max-width: none !important;
                            }

                            .mobile_hide {
                                min-height: 0px;
                                max-height: 0px;
                                max-width: 0px;
                                display: none;
                                overflow: hidden;
                                font-size: 0px;
                            }

                            .desktop_hide {
                                display: block !important;
                                max-height: none !important;
                            }
                        }
                    </style>
                    <style id="icon-media-query" type="text/css">
                        @media (max-width: 520px) {
                            .icons-inner {
                                text-align: center;
                            }

                            .icons-inner td {
                                margin: 0 auto;
                            }
                        }
                    </style>
                </head>
                <body
                    class="clean-body"
                    style="
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: 100%;
                        background-color: ${lightColor};
                    "
                >
                    <!--[if IE]><div class="ie-browser"><![endif]-->
                    <table
                        lightColor="${lightColor}"
                        cellpadding="0"
                        cellspacing="0"
                        class="nl-container"
                        role="presentation"
                        style="
                            table-layout: fixed;
                            vertical-align: top;
                            min-width: 320px;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: ${lightColor};
                            width: 100%;
                        "
                        valign="top"
                        width="100%"
                    >
                        <tbody>
                            <tr style="vertical-align: top" valign="top">
                                <td
                                    style="word-break: break-word; vertical-align: top"
                                    valign="top"
                                >
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:${lightColor}"><![endif]-->
                                    <div style="background-color: transparent">
                                        <div
                                            class="block-grid"
                                            style="
                                                min-width: 320px;
                                                max-width: 500px;
                                                overflow-wrap: break-word;
                                                word-wrap: break-word;
                                                word-break: break-word;
                                                margin: 0 auto;
                                                background-color: transparent;
                                            "
                                        >
                                            <div
                                                style="
                                                    border-collapse: collapse;
                                                    display: table;
                                                    width: 100%;
                                                    background-color: transparent;
                                                "
                                            >
                                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                                <div
                                                    class="col num12"
                                                    style="
                                                        min-width: 320px;
                                                        max-width: 500px;
                                                        display: table-cell;
                                                        vertical-align: top;
                                                        width: 500px;
                                                    "
                                                >
                                                    <div
                                                        class="col_cont"
                                                        style="width: 100% !important"
                                                    >
                                                        <!--[if (!mso)&(!IE)]><!-->
                                                        <div
                                                            style="
                                                                border-top: 0px solid
                                                                    transparent;
                                                                border-left: 0px solid
                                                                    transparent;
                                                                border-bottom: 0px solid
                                                                    transparent;
                                                                border-right: 0px solid
                                                                    transparent;
                                                                padding-top: 5px;
                                                                padding-bottom: 5px;
                                                                padding-right: 0px;
                                                                padding-left: 0px;
                                                            "
                                                        >
                                                            <!--<![endif]-->
                                                            <div
                                                                align="center"
                                                                class="img-container center autowidth"
                                                                style="
                                                                    padding-right: 0px;
                                                                    padding-left: 0px;
                                                                "
                                                            >
                                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
                                                                [endif]--><a
                                                                    href="${
                                                                        process
                                                                            .env
                                                                            .WEBSITE_URL
                                                                    }"
                                                                    style="outline: none"
                                                                    tabindex="-1"
                                                                    target="_blank"
                                                                    ><img
                                                                        align="center"
                                                                        border="0"
                                                                        class="center autowidth"
                                                                        src="${headerImg}"
                                                                        style="
                                                                            text-decoration: none;
                                                                            -ms-interpolation-mode: bicubic;
                                                                            height: auto;
                                                                            border: 0;
                                                                            width: 100%;
                                                                            max-width: 500px;
                                                                            display: block;
                                                                        "
                                                                        width="500"
                                                                /></a>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </div>
                                                            <!--[if (!mso)&(!IE)]><!-->
                                                        </div>
                                                        <!--<![endif]-->
                                                    </div>
                                                </div>
                                                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                            </div>
                                        </div>
                                    </div>
                                    <div style="background-color: transparent">
                                        <div
                                            class="block-grid"
                                            style="
                                                min-width: 320px;
                                                max-width: 500px;
                                                overflow-wrap: break-word;
                                                word-wrap: break-word;
                                                word-break: break-word;
                                                margin: 0 auto;
                                                background-color: transparent;
                                            "
                                        >
                                            <div
                                                style="
                                                    border-collapse: collapse;
                                                    display: table;
                                                    width: 100%;
                                                    background-color: transparent;
                                                "
                                            >
                                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                                                <div
                                                    class="col num12"
                                                    style="
                                                        min-width: 320px;
                                                        max-width: 500px;
                                                        display: table-cell;
                                                        vertical-align: top;
                                                        width: 500px;
                                                    "
                                                >
                                                    <div
                                                        class="col_cont"
                                                        style="width: 100% !important"
                                                    >
                                                        <!--[if (!mso)&(!IE)]><!-->
                                                        <div
                                                            style="
                                                                border-top: 0px solid
                                                                    transparent;
                                                                border-left: 0px solid
                                                                    transparent;
                                                                border-bottom: 0px solid
                                                                    transparent;
                                                                border-right: 0px solid
                                                                    transparent;
                                                                padding-top: 20px;
                                                                padding-bottom: 20px;
                                                                padding-right: 0px;
                                                                padding-left: 0px;
                                                            "
                                                        >
                                                            <!--<![endif]-->
                                                            <div
                                                                style="
                                                                    font-size: 16px;
                                                                    text-align: center;
                                                                    font-family: 'Open Sans',
                                                                        'Helvetica Neue',
                                                                        Helvetica, Arial,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <div class="our-class">
                                                                    ${content}
                                                                </div>
                                                            </div>
                                                            <!--[if (!mso)&(!IE)]><!-->
                                                        </div>
                                                        <!--<![endif]-->
                                                    </div>
                                                </div>
                                                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                            </div>
                                        </div>
                                    </div>
                                    <div style="background-color: transparent">
                                        <div
                                            class="block-grid"
                                            style="
                                                min-width: 320px;
                                                max-width: 500px;
                                                overflow-wrap: break-word;
                                                word-wrap: break-word;
                                                word-break: break-word;
                                                margin: 0 auto;
                                                background-color: ${primaryColor};
                                            "
                                        >
                                            <div
                                                style="
                                                    border-collapse: collapse;
                                                    display: table;
                                                    width: 100%;
                                                    background-color: ${primaryColor};
                                                "
                                            >
                                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:${primaryColor}"><![endif]-->
                                                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:${primaryColor};width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                                <div
                                                    class="col num12"
                                                    style="
                                                        min-width: 320px;
                                                        max-width: 500px;
                                                        display: table-cell;
                                                        vertical-align: top;
                                                        width: 500px;
                                                    "
                                                >
                                                    <div
                                                        class="col_cont"
                                                        style="width: 100% !important"
                                                    >
                                                        <!--[if (!mso)&(!IE)]><!-->
                                                        <div
                                                            style="
                                                                border-top: 0px solid
                                                                    transparent;
                                                                border-left: 0px solid
                                                                    transparent;
                                                                border-bottom: 0px solid
                                                                    transparent;
                                                                border-right: 0px solid
                                                                    transparent;
                                                                padding-top: 5px;
                                                                padding-bottom: 5px;
                                                                padding-right: 0px;
                                                                padding-left: 0px;
                                                            "
                                                        >
                                                            <!--<![endif]-->
                                                            <div
                                                                align="center"
                                                                class="img-container center fixedwidth"
                                                                style="
                                                                    padding-right: 20px;
                                                                    padding-left: 20px;
                                                                "
                                                            >
                                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 20px;padding-left: 20px;" align="center"><![endif]-->
                                                                <div
                                                                    style="
                                                                        font-size: 1px;
                                                                        line-height: 20px;
                                                                    "
                                                                >
                                                                     
                                                                </div>
                                                                <a
                                                                    href="${
                                                                        process
                                                                            .env
                                                                            .WEBSITE_URL
                                                                    }"
                                                                    style="outline: none"
                                                                    tabindex="-1"
                                                                    target="_blank"
                                                                    ><img
                                                                        align="center"
                                                                        border="0"
                                                                        class="center fixedwidth"
                                                                        src="${
                                                                            process
                                                                                .env
                                                                                .WEBSITE_URL
                                                                        }/img/MfaMalAnders_Logo_white.svg"
                                                                        style="
                                                                            text-decoration: none;
                                                                            -ms-interpolation-mode: bicubic;
                                                                            height: auto;
                                                                            border: 0;
                                                                            width: 100%;
                                                                            max-width: 150px;
                                                                            display: block;
                                                                        "
                                                                        width="150"
                                                                /></a>
                                                                <div
                                                                    style="
                                                                        font-size: 1px;
                                                                        line-height: 20px;
                                                                    "
                                                                >
                                                                     
                                                                </div>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </div>
                                                            <table
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                class="divider"
                                                                role="presentation"
                                                                style="
                                                                    table-layout: fixed;
                                                                    vertical-align: top;
                                                                    border-spacing: 0;
                                                                    border-collapse: collapse;
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    min-width: 100%;
                                                                    -ms-text-size-adjust: 100%;
                                                                    -webkit-text-size-adjust: 100%;
                                                                "
                                                                valign="top"
                                                                width="100%"
                                                            >
                                                                <tbody>
                                                                    <tr
                                                                        style="
                                                                            vertical-align: top;
                                                                        "
                                                                        valign="top"
                                                                    >
                                                                        <td
                                                                            class="divider_inner"
                                                                            style="
                                                                                word-break: break-word;
                                                                                vertical-align: top;
                                                                                min-width: 100%;
                                                                                -ms-text-size-adjust: 100%;
                                                                                -webkit-text-size-adjust: 100%;
                                                                                padding-top: 10px;
                                                                                padding-right: 10px;
                                                                                padding-bottom: 10px;
                                                                                padding-left: 10px;
                                                                            "
                                                                            valign="top"
                                                                        >
                                                                            <table
                                                                                align="center"
                                                                                border="0"
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                class="divider_content"
                                                                                role="presentation"
                                                                                style="
                                                                                    table-layout: fixed;
                                                                                    vertical-align: top;
                                                                                    border-spacing: 0;
                                                                                    border-collapse: collapse;
                                                                                    mso-table-lspace: 0pt;
                                                                                    mso-table-rspace: 0pt;
                                                                                    border-top: 1px
                                                                                        solid
                                                                                        #bbbbbb;
                                                                                    width: 100%;
                                                                                "
                                                                                valign="top"
                                                                                width="100%"
                                                                            >
                                                                                <tbody>
                                                                                    <tr
                                                                                        style="
                                                                                            vertical-align: top;
                                                                                        "
                                                                                        valign="top"
                                                                                    >
                                                                                        <td
                                                                                            style="
                                                                                                word-break: break-word;
                                                                                                vertical-align: top;
                                                                                                -ms-text-size-adjust: 100%;
                                                                                                -webkit-text-size-adjust: 100%;
                                                                                            "
                                                                                            valign="top"
                                                                                        >
                                                                                            <span></span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div
                                                                style="
                                                                    font-size: 16px;
                                                                    text-align: center;
                                                                    font-family: 'Open Sans',
                                                                        'Helvetica Neue',
                                                                        Helvetica, Arial,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <div
                                                                    class="our-class"
                                                                    style="font-size: 13px"
                                                                >
                                                                    <div>
                                                                        <a
                                                                            href="${
                                                                                process
                                                                                    .env
                                                                                    .WEBSITE_URL
                                                                            }/jobboard"
                                                                            style="
                                                                                color: ${lightColor};
                                                                                text-decoration: none;
                                                                                margin: 0
                                                                                    0.5rem;
                                                                            "
                                                                            >Stellenangebote</a
                                                                        >
                                                                        <a
                                                                            href="${
                                                                                process
                                                                                    .env
                                                                                    .WEBSITE_URL
                                                                            }/page/fuer-arbeitgeber"
                                                                            style="
                                                                                color: ${lightColor};
                                                                                text-decoration: none;
                                                                                margin: 0
                                                                                    0.5rem;
                                                                            "
                                                                            >Für
                                                                            Arbeitgeber</a
                                                                        >
                                                                        <a
                                                                            href="${
                                                                                process
                                                                                    .env
                                                                                    .WEBSITE_URL
                                                                            }/page/contact"
                                                                            style="
                                                                                color: ${lightColor};
                                                                                text-decoration: none;
                                                                                margin: 0
                                                                                    0.5rem;
                                                                            "
                                                                            >Kontakt</a
                                                                        >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <table
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                class="divider"
                                                                role="presentation"
                                                                style="
                                                                    table-layout: fixed;
                                                                    vertical-align: top;
                                                                    border-spacing: 0;
                                                                    border-collapse: collapse;
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    min-width: 100%;
                                                                    -ms-text-size-adjust: 100%;
                                                                    -webkit-text-size-adjust: 100%;
                                                                "
                                                                valign="top"
                                                                width="100%"
                                                            >
                                                                <tbody>
                                                                    <tr
                                                                        style="
                                                                            vertical-align: top;
                                                                        "
                                                                        valign="top"
                                                                    >
                                                                        <td
                                                                            class="divider_inner"
                                                                            style="
                                                                                word-break: break-word;
                                                                                vertical-align: top;
                                                                                min-width: 100%;
                                                                                -ms-text-size-adjust: 100%;
                                                                                -webkit-text-size-adjust: 100%;
                                                                                padding-top: 10px;
                                                                                padding-right: 10px;
                                                                                padding-bottom: 10px;
                                                                                padding-left: 10px;
                                                                            "
                                                                            valign="top"
                                                                        >
                                                                            <table
                                                                                align="center"
                                                                                border="0"
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                class="divider_content"
                                                                                role="presentation"
                                                                                style="
                                                                                    table-layout: fixed;
                                                                                    vertical-align: top;
                                                                                    border-spacing: 0;
                                                                                    border-collapse: collapse;
                                                                                    mso-table-lspace: 0pt;
                                                                                    mso-table-rspace: 0pt;
                                                                                    border-top: 1px
                                                                                        solid
                                                                                        #bbbbbb;
                                                                                    width: 100%;
                                                                                "
                                                                                valign="top"
                                                                                width="100%"
                                                                            >
                                                                                <tbody>
                                                                                    <tr
                                                                                        style="
                                                                                            vertical-align: top;
                                                                                        "
                                                                                        valign="top"
                                                                                    >
                                                                                        <td
                                                                                            style="
                                                                                                word-break: break-word;
                                                                                                vertical-align: top;
                                                                                                -ms-text-size-adjust: 100%;
                                                                                                -webkit-text-size-adjust: 100%;
                                                                                            "
                                                                                            valign="top"
                                                                                        >
                                                                                            <span></span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div
                                                                style="
                                                                    font-size: 16px;
                                                                    text-align: center;
                                                                    font-family: 'Open Sans',
                                                                        'Helvetica Neue',
                                                                        Helvetica, Arial,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <div
                                                                    class="our-class"
                                                                    style="
                                                                        font-size: 14px;
                                                                        margin: 2rem 0;
                                                                    "
                                                                >
                                                                    <div>
                                                                        <a
                                                                            href="https://www.facebook.com/${
                                                                                config
                                                                                    .social
                                                                                    .fb
                                                                                    .path
                                                                            }"
                                                                            ><img
                                                                                src="${
                                                                                    process
                                                                                        .env
                                                                                        .WEBSITE_URL
                                                                                }/img/facebook-brands.png"
                                                                                style="
                                                                                    margin: 0
                                                                                        0.5rem;
                                                                                "
                                                                                width="25"
                                                                        /></a>
                                                                        <a
                                                                            href="https://www.instagram.com/${
                                                                                config
                                                                                    .social
                                                                                    .ig
                                                                                    .path
                                                                            }"
                                                                            ><img
                                                                                src="${
                                                                                    process
                                                                                        .env
                                                                                        .WEBSITE_URL
                                                                                }/img/instagram-brands.png"
                                                                                style="
                                                                                    margin: 0
                                                                                        0.5rem;
                                                                                "
                                                                                width="25"
                                                                        /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style="
                                                                    font-size: 16px;
                                                                    text-align: center;
                                                                    font-family: 'Open Sans',
                                                                        'Helvetica Neue',
                                                                        Helvetica, Arial,
                                                                        sans-serif;
                                                                "
                                                            >
                                                                <div
                                                                    class="our-class"
                                                                    style="
                                                                        font-size: 12px;
                                                                        color: ${lightColor};
                                                                        text-decoration: none;
                                                                        padding: 1rem 0;
                                                                    "
                                                                >
                                                                    © ${new Date().getFullYear()} ${
            config.website.name
        }.
                                                                    <a
                                                                        href="${
                                                                            process
                                                                                .env
                                                                                .WEBSITE_URL
                                                                        }/page/agbs"
                                                                        style="
                                                                            color: ${lightColor};
                                                                            text-decoration: none;
                                                                        "
                                                                        >Datenschutzerklärung</a
                                                                    >
                                                                    |
                                                                    <a
                                                                        href="${
                                                                            process
                                                                                .env
                                                                                .WEBSITE_URL
                                                                        }/page/privacy-policy"
                                                                        style="
                                                                            color: ${lightColor};
                                                                            text-decoration: none;
                                                                        "
                                                                        >AGBs</a
                                                                    >
                                                                    <div
                                                                        style="
                                                                            margin: 1rem 0 0
                                                                                0;
                                                                        "
                                                                    >
                                                                        ${footer}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--[if (!mso)&(!IE)]><!-->
                                                        </div>
                                                        <!--<![endif]-->
                                                    </div>
                                                </div>
                                                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                            </div>
                                        </div>
                                    </div>

                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if (IE)]></div><![endif]-->
                </body>
            </html>

        `;
    },
};
