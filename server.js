var http =require('http');
var port = 3000;
var url = require('url');
var express = require("express");
var app = express();
var mysql = require('mysql');
app.use(express.static(__dirname +'/client'));
http.createServer(app).listen(port);
console.log("Listening on port " +  port + "...");
var ejs = require('ejs');
var template = '<% habit_list.forEach(function(habit_item) {console.log(habit_item.title+"/"+habit_item.desc);}) %>';

var context = {'habit_list':[
    {title: 'Habit 1', desc:'Desc 1'};
]};
ejs.render(template, context);
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

var getQuery = function (sql){
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        habits = result;
    });
};  

app.get("/")


app.get("/update", function(req, res) {
    //check what the params are
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var name = query['title'];
    var desc = query['desc'];
    var freq = query['frequency'];
    var habit_id = query['id'];
    var update  ="UPDATE `habits`.`habit` SET `title`='"+name+"', `description`='"+desc+"', `frequency_id`='"+freq+"' WHERE `id`='"+habit_id+"';";
        //var sql = "SELECT * FROM habit WHERE habit_list_id IN (SELECT id FROM habit_list WHERE owner=1);";
        con.query(update, function(err, result, fields) {
            if(err) throw err;
            console.log("update successful");
            res.send(req.body);
        });
   


});


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