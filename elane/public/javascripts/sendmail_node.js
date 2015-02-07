var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vijay13.xiss@gmail.com',
        pass: 'iliebe101251'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails
exports.sendmailnode = function(reqobject){
console.log(reqobject);
var  element = '<div>Project Link</div></div><div><a href="'+reqobject.phref+'">'+reqobject.ptitle+'</a><div>';
/*for(var i=0; i<reqobject.length; i++){
  console.log(reqobject[i].ptitle);
  if(reqobject[i] != null || reqobject[i] != undefined || reqobject[i] != ""){
  element = element + '<li><a href="'+reqobject[i].phref+'">'+reqobject[i].ptitle+'</a><li>';
  }
}*/


// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'no-reply  <foo@blurdybloop.com>', // sender address
    to: 'vijay@mantralabsglobal.com', // list of receivers
    subject: 'Angularjs Jobs ', // Subject line
    text: 'Angularjs Jobs ', // plaintext body
    html: '<ul>'+element+'</ul>' // html body
};

// send mail with defined transport object

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
}