var main = function () {
    "use strict";
    
    var addHabitList = function (habits) {
        //should check if a new habit is already in the
        //console.log("Loading Habits from Server");
        var habitlist = document.getElementById("habit-list");
        var items = habitlist.getElementsByTagName("li");
        var isInList = false;
        var old_habits = [];
        //loop through the habits already in the list:

        for(var i =0; i < items.length ; i++){
            //should check if this 
            old_habits.push(items[i].getAttribute('id'));
            //console.log("Found Habit: "+ items[i].getAttribute('id'));
            //this initializes an array full of names of the habit.

        }
        //looping through the newly recieved habits
        for (var index in habits){
             /*   
            for(var i =0; i < items.length ; ++i){
                var habitinList = items[i];
                if(habitinList.getAttribute('id') === habits[index].name){
                    isInList = true;
                }
            } */
            // document.getElementById("habit-list").empty();
                    var current_habit = habits[index];
                    if(old_habits.indexOf(current_habit.name) === -1){
                        var li = document.createElement("li");
                        li.innerHTML = "Habit: " + habits[index].name + " Description: " + habits[index].description;
                        habitlist.appendChild(li);
                        li.setAttribute("id", habits[index].name);
                    }else {
                       // console.log("Habit was already in the list: " + current_habit.name);
                    }
                
               
                
               
            
        };
    };
    
    function update() {
        
        $.getJSON("http://localhost:3000/habits", addHabitList);
        

    }
   
    var interval = setInterval(update, 7000);
   
};
$(document).ready(main);
