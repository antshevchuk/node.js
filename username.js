var http = require('http');
var url = require('url');


var server = new http.Server(function (req, res) {
  var urlParsed = url.parse(req.url, true);
  //console.log(urlParsed);
  if (urlParsed.query.username){
	  //encodeURIComponent(urlParsed.query.fullname);
	  if (urlParsed.query.username.match(/\//)!=null){
		  var str = urlParsed.query.username.split('/');
		  //decodeURI(fio);
		  if (str[str.length-1].match(/\w+\W/)!=null){
			  name = str[str.length-1].match(/\w+\W/);
			  res.end('@'+name[0].replace(/\W/,''));}
		  else res.end('@'+str[str.length-1]);
		  }
	   else {res.end('@'+urlParsed.query.username);}}
  else {
  //res.statusCode = 404;
  res.end('Invalid username');
  }
  
});
server.listen(3000, '127.0.0.1');