/*
Here, we initiate the object with the attributes of the object.
*/

Habit.prototype.Habit = function habit(title, note, frequency, tags, difficulty, points, status, completed){
    this.title = title;
    this.note = note;
    this.frequency = frequency;
    this.tags = tags;
    this.difficulty = difficulty;
    this.points = points;
    this.status = status;
    this.completed = completed;
}

/*
Here, we see the prototype setters. In these functions, we set the local
variables of the current object.
*/

Habit.prototype.setTitle = function(t){this.title = t;};
Habit.prototype.setNote = function(t){this.note = t;};
Habit.prototype.setFrequency = function(t){this.frequency = t;};
Habit.prototype.setTags = function(t){this.tags = t;};
Habit.prototype.setDifficulty = function(t){this.difficulty = t;};
Habit.prototype.setPoints = function(t){this.points = t;};
Habit.prototype.setStatus = function(t){this.status = t;};
Habit.prototype.setCompleted = function(t){this.completed = t;};

<<<<<<< HEAD
var f1 = function() {
    x=2;
    
}

=======

/*
Here, we see the prototype getters. In these functions, we return the local
variables of the current object.
*/
>>>>>>> e05d51d037bae46c1a0decdf2ac40f787b53f647
Habit.prototype.getTitle = function(){return this.title;};
Habit.prototype.getNotes = function(){return this.notes;};
Habit.prototype.getFrequency = function(){return this.frequency;};
Habit.prototype.getPoints = function(){return this.points;};
Habit.prototype.getStatus = function(){return this.status;};
Habit.prototype.getCompleted = function(){return this.completed;};
Habit.prototype.getTags = function(){return this.tags;};
Habit.prototype.getDifficulty = function(){return this.difficulty;};


