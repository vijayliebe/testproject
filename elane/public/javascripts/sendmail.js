var express = require('express');
var mailer = require('express-mailer');


var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

//Express-Email-Mailer
mailer.extend(app, {
  from: 'flyhighvijay@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'vijay13.xiss@gmail.com',
    pass: 'iliebe101251'
  }
});


exports.mailsend = function (){
 app.mailer.send('index', {
    to: 'vijay@mantralabsglobal.com', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
    subject: 'Happy Birthday Bhai' // REQUIRED.
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      //res.send('There was an error sending the email');
      return;
    }
    console.log('Email Sent');
  });
	
}