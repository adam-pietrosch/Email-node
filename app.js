const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: "smtp.seznam.cz",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: "<email>",
        pass: "<password>"
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

/* verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});*/

var mailOptions = {
    from: '<email>',
    to: '<email>',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
