var nodemailer = require('nodemailer');

async function main(){
    
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
          }
    });

    let info = await transporter.sendMail({
        from: 'YOUR_MAIL@gmail.com',
        to: 'TO_MAIL',
        subject: 'title',
        text: 'Hi'
      });

      console.log("messag: %s", info.messageId)

      console.log("prev %s",nodemailer.getTestMessageUrl(info));
}


main().catch(console.error);