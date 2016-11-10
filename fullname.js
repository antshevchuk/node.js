var http = require('http');
var url = require('url');
var fio='';


var server = new http.Server(function (req, res) {
  var urlParsed = url.parse(req.url, true);
  //console.log(urlParsed);
  if (urlParsed.query.fullname){
	  encodeURIComponent(urlParsed.query.fullname);
	  var str = urlParsed.query.fullname.split(' ');
	  if (str.length>3)res.end('Invalid fullname');
	  else if (str.length==1) {res.end(str[0]);}
		else  if (str.length==2) {fio = str[1]+' ' +str[0].charAt(0)+'.';} 
		  else {fio = str[2]+' ' +str[1].charAt(0)+'.'+' ' +str[0].charAt(0)+'.';}
	  decodeURI(fio);
	  res.end(fio);
	  }
  else {
  res.statusCode = 404;
  res.end('Page not found');
  }
  
});
server.listen(3000, '127.0.0.1');