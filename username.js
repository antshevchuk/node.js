var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
var cors = require('cors');
var fs = require("fs");
app.use(cors());


//var server = new http.Server(function (req, res) 
app.get('/task2C/',function(req,res){
  var urlParsed = url.parse(req.url, true);
  //console.log(urlParsed);
  if (urlParsed.query.username){
	  //encodeURIComponent(urlParsed.query.fullname);
	  if (urlParsed.query.username.match(/\//)!=null){
		  var str = urlParsed.query.username.split('/');
		  //decodeURI(fio);
		  if (str[str.length-1].match(/\w+\W/)!=null){
			  name = str[str.length-1].match(/\w+\W/);
			  res.send('@'+name[0].replace(/\W/gi,''));}
		  else res.send('@'+str[str.length-1]);
		  }
	   /*else if (urlParsed.query.username.match(/\@/)!=null){
		   res.send(urlParsed.query.username);
	   }*/
	   else {res.send('@'+urlParsed.query.username.replace(/\W/gi,''));}}
  else {
  //res.statusCode = 404;
  res.end('Invalid username');
  }
  
});
app.listen(3000, '127.0.0.1');