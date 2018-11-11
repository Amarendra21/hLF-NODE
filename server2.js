var http=require('http');
var fs=require('fs');
var m1=require("./formmodule.js");


function processData(req,resp){
 
 if(req.method==="GET"){
	 fs.readFile('./login.html',function(err,data){
		 if(err){
			 resp.writeHead(404,{'content-type':'text/html'});
			 resp.end("<h1>File not found</h1>");
			 
		 }else{
		    resp.writeHead(200,{'content-type':'text/html'});
		    resp.end(data);}
		 
		 
	 });
 }
 else{
	    var str="";
	    req.on('data',function(dt){
		 str+=dt;});
		req.on('end',function(){
			m1.myfunction(str);
			resp.end(str);
			console.log(str);
			
		}) 
     console.log("In post method");
 }

}



var server=http.createServer(processData);
server.listen(3100);
console.log("server started on port 3100");