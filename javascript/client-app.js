var main = function () {
    "use strict";
    var habits_exists = [];
    var addHabitList = function (habits) {
        
        console.log("Loading Habits from Server");
        var habitlist = document.getElementById("habit-list");
        for (var index in habits){
                
                console.log("");
                var li = document.createElement("li");
                li.innerHTML = "Habit: " + habits[index].name + " Description: " + habits[index].description;
                habitlist.appendChild(li);
                li.setAttribute("id", habits[index].name);
                habits_exists.push(habits[index]);
            
        };
    };
    
    function update() {
        $.getJSON("http://localhost:3000/habits", addHabitList);
        // return false;
    }
    // update();
    var interval = setInterval(update(), 2000);
    var contains = function(val, array) {
        for (var i in array) {
            if(i === val){
                return true;
            }
        }
    }
};
$(document).ready(main);
