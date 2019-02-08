var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

//Third-party middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var connection = mysql.createConnection({
   host: 'localhost',
  user: 'root',
  password: '',
  database: 'batch4'
});
app.post('/userinsertion', function (req, res) {
	response = { name : req.body.name, sex : req.body.sex, age : req.body.age, mobilenumbar : req.body.mobile, emailid : req.body.email, address : req.body.address};
	var sql = "insert into vodafone set ?";
	connection.query(sql,[response], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted successfully");
	 res.status(200).send("Inserted Succesfully");
  });
});
   app.post('/updateuser', function (req, res) {
	var userid = req.body.userid;
var	name = req.body.name;
var  sex = req.body.sex;
var  age = req.body.age;
var mobilenumbar = req.body.mobile;
var emailid = req.body.email;
var address = req.body.address;
	var sql = "UPDATE vodafone SET name = ?, sex = ?, age = ?, mobilenumbar = ?, emailid = ?, address = ? WHERE userid = ?";
	var q = "UPDATE vodafone SET name = '?' WHERE userid = ?";
	connection.query(sql,[name,sex,age,mobilenumbar,emailid,address,userid], function (err, result) {
    if (err) throw err;
    console.log("1 record Updated successfully");
	 res.status(200).send("! record Updated Succesfully");
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on http://localhost:' + port);