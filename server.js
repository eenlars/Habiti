var http =require('http');
var port = 3000;
var url = require('url');
var express = require("express");
var app = express();
var mysql = require('mysql');
app.use(express.static(__dirname +'/client'));
http.createServer(app).listen(port);
console.log("Listening on port " +  port + "...");


var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "bapaogang",
    database : "habits"
});
var habits =[];
con.connect(function(err){
        if(err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM habit WHERE habit_list_id IN (SELECT id FROM habit_list WHERE owner=1);";
        con.query(sql, function(err, result, fields) {
            if(err) throw err;
            habits = result;
        });
    });
app.get("/habits", function (req,res){
    res.json(habits);
});

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
                res.write("Succesfully Updated");
                res.end();
                console.log("Update Successful");
            }
        });
    }else {
        res.write("Please specify habit");
        console.log("habit not found");
    }
});