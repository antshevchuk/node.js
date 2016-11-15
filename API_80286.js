var express = require('express');
//var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');
var fs = require("fs");
app.use(cors());


//var obj = require('https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json');
var contents = fs.readFileSync("pc.json");
var jsonContent = JSON.parse(contents);
app.get('/task3A/',function(req,res){
	res.send(jsonContent);
})

app.get('/task3A/:lvl1',(req,res)=>{
	const p = req.params;
	if (jsonContent[p.lvl1]!==undefined){
		res.json(jsonContent[p.lvl1]);
	}
	else {notFound(res);}
});

app.get('/task3A/:lvl1/:lvl2',(req,res)=>{
	const p = req.params;
	if (jsonContent[p.lvl1][p.lvl2]!==undefined){
	res.json(jsonContent[p.lvl1][p.lvl2]);}
	
	else {notFound(res);}
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


