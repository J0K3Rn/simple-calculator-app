//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post(__dirname + "/index.html", function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var operator = String(req.body.operator);

    

    var validOperators = ['+', '-', '*', '/', '%'];

    if(num1 == null || num2 == null){
        res.send("Please enter a value for both inputs");
    }
    if(operator.length > 1){
        res.send("Please only include 1 operator in the calculaton");
    }
    if(!validOperators.includes(operator)){
        res.send("Please enter a valid operator");
    }

    var result = eval(num1 + operator + num2);

    res.send("Result is: " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});