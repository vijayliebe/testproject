var $ = require('jquery');
// Add User
exports.addelancedata = function (requestObject) {
   // var projDetailff = [{ptitle : "Facdsjhbj", phref : "http://facebook.com" }];
     $.ajax({'url': 'http://localhost:3000/users/elancepost',
	   'type' : 'POST',
	   'headers' : {'Content-Type' : 'application/json'},
	   'data' : JSON.stringify(requestObject), 
	   'processData' : false,
	   'success' : function(data){
	       console.log(data);
	   },
	   'error': function(jqXHR, data){
	       console.log(data);
	       //comcast.cvs.apps.alerts.test.showErrorDialog( '<div style="color:red;font-weight:bold;">' +
	//						     'Failed to save the settop box. See server logs for problem.</div>' );
	       },
	   'dataType' : 'text'
   });
};

exports.getelancedata = function () {
    /*$.get('http://localhost:3000/users/elancetest', '', function(data){
        var prettyObject = JSON.parse(data);
        console.log(prettyObject);
    }, 'text');*/

    /*var result = $.get('http://localhost:3000/users/elancetest');
	var responseText = result.responseText;
	console.log(responseText);*/

	$.ajax({'url': 'http://localhost:3000/users/elancetestselected/'+59788132,
	   'type' : 'GET',
	   'data' : {}, 
	   'processData' : false,
	   'success' : function(data){
	       console.log(data);
	   },
	   'error': function(jqXHR, data){
	       console.log(data);
	       //comcast.cvs.apps.alerts.test.showErrorDialog( '<div style="color:red;font-weight:bold;">' +
	//						     'Failed to save the settop box. See server logs for problem.</div>' );
	       },
	   'dataType' : 'text'
   });
};


exports.getelancedatalast = function () {
    $.get('http://localhost:3000/users/elancetestlast', '', function(data){
        var prettyObject = JSON.parse(data);
        console.log(prettyObject);
    }, 'text');
};