
	var phantom 	= require('phantom');
	var mailMethod2 = require('./sendmail_node');
	var getDbData = require('./getElanceDbData');
	var $ = require('jquery');
	// Database
	var mongo = require('mongoskin');
	var db = mongo.db("mongodb://localhost:27017/nodetest2", {native_parser:true});

	function nthIndex(str, pat, n){
	    var L= str.length, i= -1;
		    while(n-- && i++<L){
		        i= str.indexOf(pat, i);
		    }
	    return i;
	}
exports.callphantom = function (){
	phantom.create(function(ph) {

		    ph.createPage(function(page) {

		        page.open("https://www.elance.com/r/jobs/q-angular/", function(status) {

			        console.log("opened Elance? ", status);
			        page.evaluate((function() {
			        var title = document.title;
			        var Projhref = document.querySelectorAll('div#jobSearchResults .jobCard a.title');
			        //var Projrate = document.querySelectorAll('div#jobSearchResults .jobCard div.stats span.bold');

			         return {maintitle : title, Projhref : Projhref };

			        }), function(result) { // start
			        
			        var projDetail = [];
			      	var resultLength = result.Projhref.length;
			        var i = 0;

			        var getavailabledata = function(i){
			        		if(result.Projhref[i]){
			    				var projectId = parseInt((result.Projhref[i].href).substring(nthIndex((result.Projhref[i].href),'/',5)+1,nthIndex((result.Projhref[i].href),'/',6)));
		  						var projtitle = result.Projhref[i].innerText;
				    			var projurl   = result.Projhref[i].href;
				    			var resultdatalength;
				    			
							    db.collection('elanceTest').find({pid: projectId}).toArray(function (err, items) {
									    resultdatalength =items.length;
									    if(resultdatalength == 0){
											console.log(projectId+'------------------- not found - inserting');
										    //start inserting
										    var reqbody = {pid : projectId, ptitle : projtitle, phref : projurl };
										    db.collection('elanceTest').insert(reqbody, function(err, result){
										    	if(err === null){ 
											    	//console.log(result[0].pid);
											    	//console.log('--------------------------------------------');
											    	//console.log(reqbody);
											    	mailMethod2.sendmailnode(reqbody);
											    	i = i+1;
													if(i<resultLength) { getavailabledata(i); }	 
										    	}else { 
										    		console.log(err) 
										    	}
	    									});  	
											//end inserting
										}else{
										    console.log(projectId+'-------------------found - not inserting');
										    i = i+1;
											if(i<resultLength) { getavailabledata(i); }
										}
							    });

							}else{
							console.log('null valuee');
							i = i+1;
							if(i<resultLength) { getavailabledata(i); }	
							} 

		  		    }
					
					getavailabledata(i);

			        titlee = result.maintitle;		

			        ph.exit();
			        }); // end
		        });
		   });
	 });
}