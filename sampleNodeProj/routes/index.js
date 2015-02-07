var express = require('express');
var router = express.Router();
var employeeController = require('../controllers/employeeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sample Node Project - Rest APIs' });
});

router.get('/employees', function(req, res) {
    employeeController.getEmployeelist(req,res);
});

module.exports = router;
