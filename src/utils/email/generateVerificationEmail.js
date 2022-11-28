const { gmailEmail} = require("../../config/email.config")

const vericationHandler = (recieverEmail, token) => {
    return {
        from: gmailEmail,  // sender address
        to: recieverEmail,   // list of receivers
        subject: 'BahanbaKu Verification Email',        
        html: `<!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
        <title>BahanbaKu</title>
        <meta name=x-apple-disable-message-reformatting>
        <meta http-equiv=X-UA-Compatible>
        <meta charset=utf-8>
        <meta name=viewport content=target-densitydpi=device-dpi>
        <meta content=true name=HandheldFriendly>
        <meta content=width=device-width name=viewport>
        <style type="text/css">
            table {
                border-collapse: separate;
                table-layout: fixed;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt
            }
    
            table td {
                border-collapse: collapse
            }
    
            .ExternalClass {
                width: 100%
            }
    
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%
            }
    
            * {
                line-height: inherit;
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -o-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale
            }
    
            html {
                -webkit-text-size-adjust: none !important
            }
    
            img+div {
                display: none;
                display: none !important
            }
    
            img {
                Margin: 0;
                padding: 0;
                -ms-interpolation-mode: bicubic
            }
    
            h1,
            h2,
            h3,
            p,
            a {
                font-family: inherit;
                font-weight: inherit;
                font-size: inherit;
                line-height: 1;
                color: inherit;
                background: none;
                overflow-wrap: normal;
                white-space: normal;
                word-break: break-word
            }
    
            a {
                color: inherit;
                text-decoration: none
            }
    
            h1,
            h2,
            h3,
            p {
                min-width: 100% !important;
                width: 100% !important;
                max-width: 100% !important;
                display: inline-block !important;
                border: 0;
                padding: 0;
                margin: 0
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important
            }
    
            a[href^="mailto"],
            a[href^="tel"],
            a[href^="sms"] {
                color: inherit !important;
                text-decoration: none !important
            }
    
            @media only screen and (min-width: 481px) {
                .hd {
                    display: none !important
                }
            }
    
            @media only screen and (max-width: 480px) {
                .hm {
                    display: none !important
                }
            }
    
            [style*="Ubuntu"] {
                font-family: 'Ubuntu', BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif !important;
            }
    
            @media only screen and (min-width: 481px) {
    
                .t11,
                .t6 {
                    padding-top: 50px !important;
                    padding-bottom: 50px !important
                }
    
                .t38,
                .t40 {
                    padding: 30px 50px !important
                }
    
                .t57,
                .t59 {
                    padding: 50px !important
                }
    
                .t69 {
                    font-size: 35px !important;
                    mso-text-raise: 2px !important
                }
    
                .t70 {
                    mso-line-height-alt: 30px !important;
                    line-height: 30px !important
                }
    
                .t73 {
                    width: 260px !important;
                    line-height: 60px !important;
                    mso-text-raise: 13px !important
                }
    
                .t78 {
                    line-height: 60px !important;
                    mso-text-raise: 13px !important
                }
    
                .t79 {
                    line-height: 60px !important;
                    font-weight: 600 !important;
                    font-size: 18px !important;
                    mso-text-raise: 13px !important
                }
    
                .t81 {
                    width: 260px !important;
                    line-height: 60px !important;
                    mso-text-raise: 13px !important
                }
    
                .t83 {
                    mso-line-height-alt: 50px !important;
                    line-height: 50px !important
                }
    
                .t100,
                .t98 {
                    padding-left: 50px !important;
                    padding-right: 50px !important
                }
    
                .t101 {
                    mso-line-height-alt: 70px !important;
                    line-height: 70px !important
                }
    
                .t110 {
                    line-height: 27px !important;
                    font-size: 12px !important;
                    mso-text-raise: 5px !important
                }
    
                .t121 {
                    mso-line-height-alt: 30px !important;
                    line-height: 30px !important
                }
    
                .t130 {
                    font-size: 21px !important
                }
    
                .t131 {
                    mso-line-height-alt: 30px !important;
                    line-height: 30px !important
                }
    
                .t140 {
                    font-size: 16px !important
                }
    
                .t141 {
                    mso-line-height-alt: 30px !important;
                    line-height: 30px !important
                }
    
                .t150 {
                    font-size: 21px !important
                }
    
                .t151 {
                    mso-line-height-alt: 30px !important;
                    line-height: 30px !important
                }
    
                .t160 {
                    line-height: 27px !important;
                    font-size: 18px !important
                }
    
                .t161 {
                    mso-line-height-alt: 30px !important;
                    line-height: 30px !important
                }
    
                .t170 {
                    line-height: 27px !important;
                    font-size: 18px !important
                }
    
                .t190,
                .t200 {
                    font-size: 14px !important;
                    mso-text-raise: 3px !important
                }
            }
        </style>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap" rel="stylesheet"
            type="text/css">
        <!--<![endif]-->
        <!--[if mso]>
    <style type="text/css">
    .t11,.t6{padding-top:50px !important;padding-bottom:50px !important}.t38,.t40{padding:30px 50px !important}.t57,.t59{padding:50px !important}.t69{font-size:35px !important;mso-text-raise:2px !important}.t70{mso-line-height-alt:30px !important;line-height:30px !important}.t73{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t78{line-height:60px !important;mso-text-raise:13px !important}.t79{line-height:60px !important;font-weight:600 !important;font-size:18px !important;mso-text-raise:13px !important}.t81{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t83{mso-line-height-alt:50px !important;line-height:50px !important}.t100,.t98{padding-left:50px !important;padding-right:50px !important}.t101{mso-line-height-alt:70px !important;line-height:70px !important}.t110{line-height:27px !important;font-size:12px !important;mso-text-raise:5px !important}.t121{mso-line-height-alt:30px !important;line-height:30px !important}.t130{font-size:21px !important}.t131{mso-line-height-alt:30px !important;line-height:30px !important}.t140{font-size:16px !important}.t141{mso-line-height-alt:30px !important;line-height:30px !important}.t150{font-size:21px !important}.t151{mso-line-height-alt:30px !important;line-height:30px !important}.t160{line-height:27px !important;font-size:18px !important}.t161{mso-line-height-alt:30px !important;line-height:30px !important}.t170{line-height:27px !important;font-size:18px !important}.t190,.t200{font-size:14px !important;mso-text-raise:3px !important}
    </style>
    <![endif]-->
        <script type="application/ld+json">
            [{
                "@context": "http://schema.org/",
                "@type": "Organization",
                "logo": "https://uploads.tabular.email/u/e7482b4c-8628-446c-85fa-249d02a69a7e/25e37221-0c7c-4422-8a8d-02c098ad1311.png"
            }]
        </script>
        <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    
    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#EDEDED;">
        <div
            style="display:none; font-size:1px; color:#333333; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
            BahanbaKu</div>
        <div style="font-size: 0px; line-height:0px; display: none; max-height: 0px; overflow: hidden;">
            &#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
        </div>
        <div class=t1 style="background-color:#EDEDED;">
            <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                <tr>
                    <td class=t201 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
                        <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color=#EDEDED />
    </v:background>
    <![endif]-->
                        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                            <tr>
                                <td>
                                    <table class=t5 role=presentation cellpadding=0 cellspacing=0 align=center>
                                        <tr>
                                            <td class=t6 style="overflow:hidden;padding:20px 10px 20px 10px;">
                                                <div class=t12
                                                    style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                    <!--[if mso]>
    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                                                    <div class=t16
                                                        style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                                                        <table role=presentation width=100% cellpadding=0 cellspacing=0
                                                            class=t18>
                                                            <tr>
                                                                <td class=t19
                                                                    style="overflow:hidden;background-color:unset;">
                                                                    <table role=presentation width=100% cellpadding=0
                                                                        cellspacing=0>
                                                                        <tr>
                                                                            <td>
                                                                                <div class=t31
                                                                                    style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                                    <!--[if mso]>
    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                                                                                    <div class=t35
                                                                                        style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                                                                                        <table role=presentation width=100%
                                                                                            cellpadding=0 cellspacing=0
                                                                                            class=t37>
                                                                                            <tr>
                                                                                                <td class=t38
                                                                                                    style="overflow:hidden;background-color:#FAFAFA;padding:20px 30px 20px 30px;border-radius:8px 8px 0 0;">
                                                                                                    <table role=presentation
                                                                                                        width=100%
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t113
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t114
                                                                                                                            style="overflow:hidden;width:180px;">
                                                                                                                            <div
                                                                                                                                style="font-size:0px;">
                                                                                                                                <img class=t120
                                                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                                                    width=180
                                                                                                                                    src=https://storage.googleapis.com/bahanbaku-assets/assets/bahanbaku-logo-colorful.png />
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                    <!--[if mso]>
    </td>
    </tr></table>
    <![endif]-->
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div class=t50
                                                                                    style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                                                                    <!--[if mso]>
    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                                                                                    <div class=t54
                                                                                        style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                                                                                        <table role=presentation width=100%
                                                                                            cellpadding=0 cellspacing=0
                                                                                            class=t56>
                                                                                            <tr>
                                                                                                <td class=t57
                                                                                                    style="border-bottom:1px solid #F7F7F7;overflow:hidden;background-color:#FFFFFF;padding:30px 30px 30px 30px;border-radius:0 0 8px 8px;">
                                                                                                    <table role=presentation
                                                                                                        width=100%
                                                                                                        cellpadding=0
                                                                                                        cellspacing=0>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t62
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t63
                                                                                                                            style="overflow:hidden;width:510px;">
                                                                                                                            <h1 class=t69
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:40px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#3A3A3A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:5px;">
                                                                                                                                Verifikasi
                                                                                                                                email
                                                                                                                                Anda
                                                                                                                                segera.
                                                                                                                            </h1>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t121
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t123
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t124
                                                                                                                            style="overflow:hidden;width:563px;">
                                                                                                                            <p class=t130
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:28px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                                Hello,
                                                                                                                                John
                                                                                                                                Doe
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t141
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t143
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t144
                                                                                                                            style="overflow:hidden;width:563px;">
                                                                                                                            <p class=t150
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:28px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                                Selamat!
                                                                                                                                Pembuatan
                                                                                                                                akun
                                                                                                                                anda
                                                                                                                                telah
                                                                                                                                berhasil.
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t131
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t133
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t134
                                                                                                                            style="overflow:hidden;width:563px;">
                                                                                                                            <p class=t140
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:28px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#545454;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">
                                                                                                                                Untuk
                                                                                                                                pengalaman
                                                                                                                                penggunaan
                                                                                                                                aplikasi
                                                                                                                                yang
                                                                                                                                jauh
                                                                                                                                lebih
                                                                                                                                baik,
                                                                                                                                kami
                                                                                                                                meminta
                                                                                                                                tolong
                                                                                                                                kepada
                                                                                                                                Anda
                                                                                                                                untuk
                                                                                                                                melakukan
                                                                                                                                verifikasi
                                                                                                                                email
                                                                                                                                terlebih
                                                                                                                                dahulu.
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t70
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t72
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t73
                                                                                                                            style="background-color:#3A3A3A;overflow:hidden;width:326px;text-align:center;line-height:50px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:14px 14px 14px 14px;">
                                                                                                                            <a class=t79
                                                                                                                                href=https://api.bahanbaku.app/verify?token=${token}
                                                                                                                                style="display:block;font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:50px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;"
                                                                                                                                target=_blank>Verifikasi
                                                                                                                                Email</a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t151
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t153
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t154
                                                                                                                            style="overflow:hidden;width:603px;">
                                                                                                                            <p class=t160
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:23px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#545454;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                Abaikan
                                                                                                                                jika
                                                                                                                                anda
                                                                                                                                merasa
                                                                                                                                tidak
                                                                                                                                melakukan
                                                                                                                                aktivitas
                                                                                                                                ini.
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t161
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t163
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t164
                                                                                                                            style="overflow:hidden;width:603px;">
                                                                                                                            <p class=t170
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:23px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#545454;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                                                Hormat
                                                                                                                                Kami,
                                                                                                                                Tim
                                                                                                                                BahanbaKu.
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <div class=t101
                                                                                                                    style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>
                                                                                                                <table
                                                                                                                    class=t103
                                                                                                                    role=presentation
                                                                                                                    cellpadding=0
                                                                                                                    cellspacing=0
                                                                                                                    align=left>
                                                                                                                    <tr>
                                                                                                                        <td class=t104
                                                                                                                            style="overflow:hidden;width:603px;">
                                                                                                                            <p class=t110
                                                                                                                                style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:23px;font-weight:400;font-style:normal;font-size:10px;text-decoration:none;text-transform:none;direction:ltr;color:#545454;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">
                                                                                                                                Anda
                                                                                                                                telah
                                                                                                                                menerima
                                                                                                                                email
                                                                                                                                ini
                                                                                                                                untuk
                                                                                                                                tujuan
                                                                                                                                informasi
                                                                                                                                guna
                                                                                                                                memberi
                                                                                                                                tahu
                                                                                                                                Anda
                                                                                                                                tentang
                                                                                                                                perubahan
                                                                                                                                penting
                                                                                                                                pada
                                                                                                                                akun
                                                                                                                                Anda.
                                                                                                                                Anda
                                                                                                                                dapat
                                                                                                                                <u>berhenti
                                                                                                                                    berlangganan</u>
                                                                                                                                email
                                                                                                                                untuk
                                                                                                                                akun
                                                                                                                                yang
                                                                                                                                terkait
                                                                                                                                dengan
                                                                                                                                JohnDoe@gmail.com
                                                                                                                                <u>di
                                                                                                                                    sini</u>.
                                                                                                                            </p>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                    <!--[if mso]>
    </td>
    </tr></table>
    <![endif]-->
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <!--[if mso]>
    </td>
    </tr></table>
    <![endif]-->
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class=t91
                                        style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                                        <!--[if mso]>
    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                                        <div class=t95
                                            style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                                            <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t97>
                                                <tr>
                                                    <td class=t98 style="overflow:hidden;padding:0 30px 0 30px;">
                                                        <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                                            <tr>
                                                                <td>
                                                                    <table class=t193 role=presentation cellpadding=0
                                                                        cellspacing=0 align=left>
                                                                        <tr>
                                                                            <td class=t194
                                                                                style="overflow:hidden;width:460px;">
                                                                                <p class=t200
                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:23px;font-weight:400;font-style:normal;font-size:10px;text-decoration:none;text-transform:none;direction:ltr;color:#4CB0D4;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">
                                                                                    Kebijakan Privasi dan Cookie | Kebjiakan
                                                                                    Pengguna | Legal | Unsubscribe</p>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class=t171
                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                        &nbsp;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table class=t173 role=presentation cellpadding=0
                                                                        cellspacing=0 align=left>
                                                                        <tr>
                                                                            <td class=t174
                                                                                style="overflow:hidden;width:105px;">
                                                                                <div style="font-size:0px;"><img class=t180
                                                                                        style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                        width=105 src=https://storage.googleapis.com/bahanbaku-assets/assets/bahanbaku-logo-bw.png /></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class=t181
                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                                                        &nbsp;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table class=t183 role=presentation cellpadding=0
                                                                        cellspacing=0 align=left>
                                                                        <tr>
                                                                            <td class=t184
                                                                                style="overflow:hidden;width:420px;">
                                                                                <p class=t190
                                                                                    style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Ubuntu';line-height:23px;font-weight:400;font-style:normal;font-size:10px;text-decoration:none;text-transform:none;direction:ltr;color:#878787;text-align:left;mso-line-height-rule:exactly;mso-text-raise:4px;">
                                                                                    Copyright ©2022 BahanbaKu. All rights
                                                                                    reserved.</p>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <!--[if mso]>
    </td>
    </tr></table>
    <![endif]-->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class=t83
                                        style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">
                                        &nbsp;</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    
    </html>`,
    };
  }
  
  module.exports = vericationHandler;