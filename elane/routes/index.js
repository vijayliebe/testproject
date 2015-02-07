var express = require('express');
var getElanceprojects = require('../public/javascripts/getElanceData');
var postelanceData = require('../public/javascripts/getElanceDbData');
var mailMethod = require('../public/javascripts/sendmail');
var mailMethod2 = require('../public/javascripts/sendmail_node');
var router = express.Router();


titlee = "Loading...";

setInterval(function(){
getElanceprojects.callphantom();
}, 50000)


router.get('/', function(req, res) {
    var db = req.db;
    db.collection('elanceTest').find().toArray(function (err, items) {
        res.render('index', { title: "Angular Jobs", pdetails : items }); 
    });

});


module.exports = router;
