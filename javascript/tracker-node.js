var http = require('http');
var port = 3000;
var url = require('url');
var express = require("express");

var app = express();
app.use(express.static(__dirname +"/client"));
http.createServer(app).listen(port);
console.log("Listening on port " +  port + "...");

var habits = [];
var h1 = {"name":"Habit 1","description":"This is Habit 1"};
var h2 = {"name":"Habit 2","description":"This is Habit 2"};

habits.push(h1);
habits.push(h2);
//when client visits localhost:3000/addtodo and specifies values.
app.get("/addHabit", function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if(query["name"] !== undefined){
        var text = {name : query["name"],
        description: query["description"]
        };
    habits.push(text);
    console.log("Added habit: " + text.name);
    res.end("Habit added succesfully.");
    }else {
        res.end("Error, name parameter not specified.")
    }
});

//when client requests habits
app.get("/habits", function(req,res) {
    console.log("Habits Requested");
    res.json(habits);
});

app.get("",function(req, res) {
    res.writeHead(200);
    res.write("Welcome to the Home Page");
    res.end();

});
