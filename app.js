var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); 
var upload = multer(); 
var https = require('https');
var fs = require('fs');
var path = require("path");

var options = {
	key: fs.readFileSync('./cert/privatekey.pem'),
	cert: fs.readFileSync('./cert/certificate.pem')
}

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/post', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

https.createServer(options, app).listen(8888, function(){
	console.log('HTTPS server starting on prot 8888....');
})

