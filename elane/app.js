var express = require('express');
//var db = require('./db'); // for online DB i.e. MongoLab
var mailer = require('express-mailer');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var postelanceData = require('./public/javascripts/getElanceDbData');
var mailMethod = require('./public/javascripts/sendmail');

// Database
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/nodetest2", {native_parser:true});

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/users', users);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

//Express-Email-Mailer
/*mailer.extend(app, {
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

  app.mailer.send('email', {
    to: 'naveen9234@rediffmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
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
*/

//Phantomjs
/*var phantom = require('phantom');
 phantom.create(function(ph) {
   ph.createPage(function(page) {
     page.open("http://www.google.com", function(status) {
       console.log("opened google? ", status);
       page.evaluate((function() {
         return document.title;
       }), function(result) {
         console.log('Page title is ' + result);
         ph.exit();
       });
     });
   });
 });*/


