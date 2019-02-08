var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

//Third-party middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var connection = mysql.createConnection({
   host: 'localhost',
  user: 'root',
  password: '',
  database: 'batch4'
});
app.post('/fetchuser', function (req, res) {
	var id = req.body.userid;
	if(id == ''){
		console.log("Cannot be Blank! Please enter any one Value");
		res.send("Cannot be Blank! Please enter any one Value");
}else{
	connection.query("SELECT * FROM vodafone where userid = ?",id, function (err, result) {
		console.log(id);
    if(result != [] && result != null && !err){ 
    console.log(result);
	 res.status(200).send(result);
	}else{
		console.log("OOPS! Enter the correct data");
	res.status(200).send("OOPS! Enter the correct data");
	}
	});
}
  });
   

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on http://localhost:' + port);