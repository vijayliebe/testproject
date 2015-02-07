
exports.getEmployeelist = function (req,res) {
	 var db = req.db;
     db.collection('employees').find().toArray(function (err, items) {
    	 if(err) { 
    	 	res.status(500).json({status : "failed", result : "something went wrong !"});
    	}else{ 
    		res.json({status :"success", result : items});
    	}
        
    });
};