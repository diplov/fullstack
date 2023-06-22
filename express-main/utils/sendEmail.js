const nodemailer = require("nodemailer")

const sendEmail = async (mailOption) => {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    await transport.sendMail({
        from: mailOption.from,
        to: mailOption.to,
        subject: mailOption.subject,
        text: mailOption.text,
        html: mailOption.html,
    })
    console.log("email send successfully")
}
module.exports=sendEmail