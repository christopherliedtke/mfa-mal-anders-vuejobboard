module.exports = {
    generate: function (content, footer = "") {
        // for templating https://beefree.io/
        return `
           <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
        <!--[if gte mso 9
            ]><xml
                ><o:OfficeDocumentSettings><o:AllowPNG /><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml
            ><!
        [endif]-->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width" name="viewport" />
        <!--[if !mso]><!-->
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <!--<![endif]-->
        <title></title>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
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

            a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
            }
        </style>
        <style id="media-query" type="text/css">
            @media (max-width: 620px) {
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

                .col > div {
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

                .no-stack .col.num4 {
                    width: 33% !important;
                }

                .no-stack .col.num8 {
                    width: 66% !important;
                }

                .no-stack .col.num4 {
                    width: 33% !important;
                }

                .no-stack .col.num3 {
                    width: 25% !important;
                }

                .no-stack .col.num6 {
                    width: 50% !important;
                }

                .no-stack .col.num9 {
                    width: 75% !important;
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
        <style id="menu-media-query" type="text/css">
            @media (max-width: 620px) {
                .menu-checkbox[type='checkbox'] ~ .menu-links {
                    display: none !important;
                    padding: 5px 0;
                }

                .menu-checkbox[type='checkbox'] ~ .menu-links span.sep {
                    display: none;
                }

                .menu-checkbox[type='checkbox']:checked ~ .menu-links,
                .menu-checkbox[type='checkbox'] ~ .menu-trigger {
                    display: block !important;
                    max-width: none !important;
                    max-height: none !important;
                    font-size: inherit !important;
                }

                .menu-checkbox[type='checkbox'] ~ .menu-links > a,
                .menu-checkbox[type='checkbox'] ~ .menu-links > span.label {
                    display: block !important;
                    text-align: center;
                }

                .menu-checkbox[type='checkbox']:checked ~ .menu-trigger .menu-close {
                    display: block !important;
                }

                .menu-checkbox[type='checkbox']:checked ~ .menu-trigger .menu-open {
                    display: none !important;
                }

                #menuywrs1m ~ div label {
                    border-radius: 50% !important;
                }

                #menuywrs1m:checked ~ .menu-links {
                    background-color: transparent !important;
                }

                #menuywrs1m:checked ~ .menu-links a {
                    color: #ffffff !important;
                }

                #menuywrs1m:checked ~ .menu-links span {
                    color: #ffffff !important;
                }

                #menunc25cp ~ div label {
                    border-radius: 0% !important;
                }

                #menunc25cp:checked ~ .menu-links {
                    background-color: #000000 !important;
                }

                #menunc25cp:checked ~ .menu-links a {
                    color: #ffffff !important;
                }

                #menunc25cp:checked ~ .menu-links span {
                    color: #ffffff !important;
                }
            }
        </style>
    </head>
    <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f8faf9">
        <!--[if IE]><div class="ie-browser"><![endif]-->
        <table bgcolor="#f8faf9" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8faf9; width: 100%" valign="top" width="100%">
            <tbody>
                <tr style="vertical-align: top" valign="top">
                    <td style="word-break: break-word; vertical-align: top" valign="top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f8faf9"><![endif]-->
                        <div style="background-color: transparent">
                            <div class="block-grid mixed-two-up no-stack" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #6d0230">
                                <div style="border-collapse: collapse; display: table; width: 100%; background-color: #6d0230">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#6d0230"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="200" style="background-color:#6d0230;width:200px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                    <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 200px; width: 200px">
                                        <div style="width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top: 0px; padding-bottom: 0px; padding-right: 0px; padding-left: 0px">
                                                <!--<![endif]-->
                                                <div align="left" class="img-container left fixedwidth fullwidthOnMobile" style="padding-right: 20px; padding-left: 20px">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 20px;padding-left: 20px;" align="left"><![endif]-->
                                                    <div style="font-size: 1px; line-height: 15px"> </div>
                                                    <a href="http://www.example.com" style="outline: none" tabindex="-1" target="_blank"> <img alt="Alternate text" border="0" class="left fixedwidth fullwidthOnMobile" src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/09/Logo_mfa-mal-anders-white.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 110px; display: block" title="Alternate text" width="110" /></a>
                                                    <div style="font-size: 1px; line-height: 10px"> </div>
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td><td align="center" width="400" style="background-color:#6d0230;width:400px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:10px;"><![endif]-->
                                    <div class="col num8" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 400px; width: 400px">
                                        <div style="width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top: 10px; padding-bottom: 10px; padding-right: 0px; padding-left: 0px">
                                                <!--<![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt" valign="top" width="100%">
                                                    <tr style="vertical-align: top" valign="top">
                                                        <td align="right" style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 20px; text-align: right; font-size: 0px" valign="top">
                                                            <!--[if !mso><!-->
                                                            <input class="menu-checkbox" id="menuywrs1m" style="display: none !important; max-height: 0; visibility: hidden" type="checkbox" />
                                                            <!--<![endif]-->
                                                            <div class="menu-trigger" style="display: none; max-height: 0px; max-width: 0px; font-size: 0px; overflow: hidden">
                                                                <label class="menu-label" for="menuywrs1m" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: right; text-align: center; color: #ffffff; text-decoration: none; background-color: transparent"
                                                                    ><span class="menu-open" style="mso-hide: all; font-size: 26px; line-height: 36px">☰</span><span class="menu-close" style="display: none; mso-hide: all; font-size: 26px; line-height: 36px">✕</span></label
                                                                >
                                                            </div>
                                                            <div class="menu-links">
                                                                <!--[if mso]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center">
<tr>
<td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
<!
                                                                [endif]--><a href="https://www.mfa-mal-anders.de" style="padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; display: inline; color: #ffffff; font-family: 'Montserrat', 'Verdana', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 12px; text-decoration: none">HOME</a>
                                                                <!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><!
                                                                [endif]--><a href="https://www.mfa-mal-anders.de/page/mfa-career" style="padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; display: inline; color: #ffffff; font-family: 'Montserrat', 'Verdana', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 12px; text-decoration: none">MFA KARRIERE</a>
                                                                <!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><!
                                                                [endif]--><a href="https://www.mfa-mal-anders.de/page/fuer-arbeitgeber" style="padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; display: inline; color: #ffffff; font-family: 'Montserrat', 'Verdana', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 12px; text-decoration: none">ARBEITGEBER</a>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
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
                            <div class="block-grid" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #6d0230">
                                <div style="border-collapse: collapse; display: table; width: 100%; background-color: #6d0230">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#6d0230"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#6d0230;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px">
                                        <div style="width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top: 0px; padding-bottom: 0px; padding-right: 0px; padding-left: 0px">
                                                <!--<![endif]-->
                                                <div align="center" class="img-container center fixedwidth" style="padding-right: 0px; padding-left: 0px">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
                                                    [endif]--><a href="https://www.mfa-mal-anders.de" style="outline: none" tabindex="-1" target="_blank"> <img align="center" alt="The App" border="0" class="center fixedwidth" src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/09/mfaMalAnders_Facebook_Banner.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 480px; display: block" title="The App" width="480" /></a>
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
                            <div class="block-grid" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f2f6f4">
                                <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f2f6f4">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#f2f6f4"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#f2f6f4;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px">
                                        <div style="width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top: 15px; padding-bottom: 15px; padding-right: 15px; padding-left: 15px">
                                                <!--<![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="20" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 20px; width: 100%" valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top" valign="top">
                                                                            <td height="20" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Tahoma, sans-serif"><![endif]-->
                                                <div style="color: #000000; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 1.2; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px">
                                                <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px">
                                                        ${content}
                                                    </div>
                                                    
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
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
                            <div class="block-grid" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f2f6f4">
                                <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f2f6f4">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#f2f6f4"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#f2f6f4;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px">
                                        <div style="width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top: 0px; padding-bottom: 0px; padding-right: 0px; padding-left: 0px">
                                                <!--<![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="20" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 20px; width: 100%" valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top" valign="top">
                                                                            <td height="20" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
                            <div class="block-grid" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #6d0230">
                                <div style="border-collapse: collapse; display: table; width: 100%; background-color: #6d0230">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#6d0230"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#6d0230;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px">
                                        <div style="width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top: 5px; padding-bottom: 5px; padding-right: 0px; padding-left: 0px">
                                                <!--<![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="20" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 20px; width: 100%" valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top" valign="top">
                                                                            <td height="20" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div align="center" class="img-container center fixedwidth" style="padding-right: 5px; padding-left: 5px">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 5px;padding-left: 5px;" align="center"><![endif]-->
                                                    <div style="font-size: 1px; line-height: 10px"> </div>
                                                    <a href="http://www.example.com" style="outline: none" tabindex="-1" target="_blank"> <img align="center" alt="Your Logo" border="0" class="center fixedwidth" src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/09/Logo_mfa-mal-anders-white.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 210px; display: block" title="Your Logo" width="210" /></a>
                                                    <div style="font-size: 1px; line-height: 10px"> </div>
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 10px; padding-bottom: 5px; padding-left: 10px" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #f8faf9; width: 100%" valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top" valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt" valign="top" width="100%">
                                                    <tr style="vertical-align: top" valign="top">
                                                        <td align="center" style="word-break: break-word; vertical-align: top; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; text-align: center; font-size: 0px" valign="top">
                                                            <div class="menu-links">
                                                                <!--[if mso]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center">
<tr>
<td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
<!
                                                                [endif]--><a href="https://www.mfa-mal-anders.de/page/about" style="padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; display: inline; color: #f8faf9; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 12px; text-decoration: none">ÜBER</a>
                                                                <!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><!
                                                                [endif]--><a href="https://www.mfa-mal-anders.de/page/fuer-arbeitgeber" style="padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; display: inline; color: #f8faf9; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 12px; text-decoration: none">ARBEITGEBER</a>
                                                                <!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><!
                                                                [endif]--><a href="https://www.mfa-mal-anders.de/page/contact" style="padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; display: inline; color: #f8faf9; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 12px; text-decoration: none">KONTAKT</a>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 10px; padding-bottom: 5px; padding-left: 10px" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #f8faf9; width: 100%" valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top" valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 5px; padding-bottom: 10px; padding-left: 5px" valign="top">
                                                                <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0" valign="top">
                                                                    <tbody>
                                                                        <tr align="center" style="vertical-align: top; display: inline-block; text-align: center" valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px" valign="top">
                                                                                <a href="https://www.facebook.com/MFAmalanders/" target="_blank"><img alt="Facebook" height="32" src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/09/facebook@2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block" title="Facebook" width="32" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                                                <div style="color: #f8faf9; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 1.2; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px">
                                                    <div style="line-height: 1.2; font-size: 12px; color: #f8faf9; font-family: Montserrat, Verdana, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px">
                                                        <p style="font-size: 10px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 12px; margin: 0">
                                                            <span style="font-size: 10px">© 2020 MFA mal anders. <a href="https://www.mfa-mal-anders.de/page/privacy-policy" rel="noopener" style="text-decoration: underline; color: #f8faf9" target="_blank">Datenschutzerklärung</a> | <a href="https://www.mfa-mal-anders.de/page/agbs" rel="noopener" style="text-decoration: underline; color: #f8faf9" target="_blank">AGBs</a></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="20" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 20px; width: 100%" valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top" valign="top">
                                                                            <td height="20" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
