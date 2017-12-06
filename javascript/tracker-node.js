var http = require('http');
var port = 3000;
var url = require('url');
var express = require("express");

var app = express();
app.use(express.static(__dirname +"/client"));
http.createServer(app).listen(port);
console.log("Listening on port " +  port + "...");

var habits = [];
var h1 = {"name":"Habit1","description":"This is Habit 1"};
var h2 = {"name":"Habit2","description":"This is Habit 2"};

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

//client wants to update
app.get("/update", function(req, res) {
    //check what the params are
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var old_name = query["name"];
    var new_name = query["nname"];
    var new_desc = query["ndescription"];
    //actual update
    var goback = "<a href='habits'>Click here to go back</a>";
    if(old_name !== undefined) {
        habits.forEach(function(habit){
            if(habit.name === old_name){
                if(new_name !== undefined){
                    habit.name = new_name;
                    console.log("Name has been updated");
                }
                habit.name = new_name;
                if(new_desc !== undefined){
                    habit.description = new_desc;
                    console.log("Description for this habit has been updated");
                }
                res.writeHead(200);
                res.write("Succesfully Updated" + goback);
                res.end();
                console.log("Update Successful");
            }
        });
    }else {
        res.write("Please specify habit");
        console.log("habit not found");
    }
});

//deleting a habit
app.get("/delete", function(req, res) {
    //check what the params are
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    var name = query["name"];
   
    //actual deletion
    var goback = "";
    if(name !== undefined) {
        habits.forEach(function(habit){
            if(habit.name === name){
                var index = habits.indexOf(habit);
                if(index !== -1){
                    habits.splice(index, 1);
                    res.writeHead(200);
                    res.write("Successfully deleted Habit");
                    res.end();
                console.log("Delete Successful");
                }
            }
        });
    }else {
        res.write("Please specify habit");
        console.log("habit not found");
    }
});
