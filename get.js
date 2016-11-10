var http = require('http');
var url = require('url');
function sum (a,b){
      var s = Number(a)+Number(b);
	  return String(s);
  }


var server = new http.Server(function (req, res) {
  var urlParsed = url.parse(req.url, true);
  if (urlParsed.query.a&&urlParsed.query.b){
	  res.end(sum(urlParsed.query.a, urlParsed.query.b));}
  else if (urlParsed.query.a&&typeof urlParsed.query.b === 'undefined'){
	  res.end(sum(urlParsed.query.a,0));
  }
  else if (urlParsed.query.b&&typeof urlParsed.query.a === 'undefined'){
	  res.end(sum(urlParsed.query.b,0));
  }
  else if (typeof urlParsed.query.a === 'undefined'&&typeof urlParsed.query.b === 'undefined'){
	  res.end(sum(0,0));
  }
  else {
  res.statusCode = 404;
  res.end('Page not found');
  }
  
});
server.listen(3000, '127.0.0.1');

