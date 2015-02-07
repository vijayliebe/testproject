var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});*/

router.get('/userlist', function(req, res) {
    var db = req.db;
    db.collection('userlist').find().toArray(function (err, items) {
        res.json(items);
    });
});

router.get('/elancetest', function(req, res) {
    var db = req.db;
    db.collection('elanceTest').find().toArray(function (err, items) {
        res.json(items);
    });
});

router.get('/elancetestselected/:projid', function(req, res) {
    var projid = parseInt(req.param("projid"));
    //console.log(typeof(projid) +'-----------------'+ projid +'---------------'+req.param("projid"));
    var db = req.db;
    db.collection('elanceTest').find({pid: projid}).toArray(function (err, items) {
    res.json(items);
    });
});

router.post('/adduser', function(req, res) {
	console.log(req.body);
    var db = req.db;
    db.collection('userlist').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.post('/elancepost', function(req, res) {
	console.log(req.body);
    var db = req.db;
    db.collection('elanceTest').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
