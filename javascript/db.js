var http = require('http');
var port = 3000;
var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "bapaogang",
    database : "habits"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM habit WHERE habit_list_id IN (SELECT id FROM habit_list WHERE owner=1);";
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log("Result" ,result);
    });
});