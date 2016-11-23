var express = require('express');
var app = express();
var cors = require('cors');
var url = require('url');
var convert = require('color-converter');
app.use(cors());


//var server = new http.Server(function (req, res) 
app.get('/task2d/',function(req,res){
  var urlParsed = url.parse(req.url, true);
  //console.log(convert.hex.channels);
	  if (urlParsed.query.color){ 
		  clr = urlParsed.query.color.toLowerCase().replace(/ /g,"");
		  //clr.replace(/^[\d\w]+/g,"");
		  if (clr.length==3){var clr2 = clr[0]+clr[0]+clr[1]+clr[1]+clr[2]+clr[2];
		  res.send('#'+clr2);
		  }
		  else if (clr.length!==3&&clr.length!==6){res.send('Invalid color');}
		  else if (clr.match(/[0-9a-f]{6}/g)!==null){res.send('#'+clr);}
 		  else {res.send('Invalid color');}
	  }
	  else {res.send('Invalid color');}
});
app.listen(3000, '127.0.0.1');