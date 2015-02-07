var employeeModel = require('../models/employeeModel');

exports.getEmployeelist = function (req,res) {
	 employeeModel.getEmployeelist(req,res);
};