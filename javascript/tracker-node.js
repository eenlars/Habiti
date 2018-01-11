var http = require('http');
var port = 3000;
var url = require('url');
var express = require("express");
var wJ  = require('write-json-file');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "bapaogang",
    database : "habits"
});
var habits =[];
var getdb = function(id) {
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM habit WHERE habit_list_id IN (SELECT id FROM habit_list WHERE owner=1);";
        con.query(sql, function(err, result, fields) {
            if(err) throw err;
            habits = result;
        });
    });
};

app.use(express.static(__dirname +"/client"));
http.createServer(app).listen(port);
console.log("Listening on port " +  port + "...");



//put the habits in an array called habits
habits.push(h1,h2,h3);

//when client visits localhost:3000/addtodo and specifies values.
app.get("/addHabit", function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var hname = query["name"].stripslashes;
    var hdescription = query["description"].stripslashes;
    if(query["name"] !== undefined){
        var text = {name : hname,
        description: hdescription
        };
    habits.push(text);
    wJ('../habits.json', habits ).then(console.log("Habit Added to File!"));
    console.log("Added habit: " + text.name);
    res.end("Habit added succesfully.");
    }else {
        res.end("Error, name parameter not specified.")
    }
});

//when client requests habits
app.get("/habits", function(req,res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log("Habits Requested");
    var id = query["id"];
    getdb(id);
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
    //var goback = "<a href='habits'>Click here to go back</a>";
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

//when there's a mistake
app.get("/habitss", function(req,res) {
    res.redirect("/habitss");
});
app.get("/updatee", function(req,res) {
    res.redirect("/update");
});
//routing parameters as well
app.get("/deletee", function(req,res) {
    res.redirect('/delete' + "?" + url.parse(req.url, true).query["name"]);
});
app.get("/addHabitt", function(req,res) {
    res.redirect("/addHabit");
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
