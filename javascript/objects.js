function Habit(title, notes, frequency){
    this.title = title;
    /*
	tags, difficulty , points, status, completed



    */
}

Habit.prototype.setTitle = function(t){this.title = t;};


Habit.prototype.setNote = function(t){this.note = t;};
Habit.prototype.setFrequency = function(t){this.frequency = t;};
Habit.prototype.setTags = function(t){this.tags = t;};
Habit.prototype.setDifficulty = function(t){this.difficulty = t;};
Habit.prototype.setPoints = function(t){this.points = t;};
Habit.prototype.setStatus = function(t){this.status = t;};
Habit.prototype.setCompleted = function(t){this.completed = t;};

var f1 = function() {
    x=2;
    
}

Habit.prototype.getTitle = function(){return this.title;};
Habit.prototype.getNotes = function(){return this.notes;};
Habit.prototype.getFrequency = function(){return this.frequency;};
Habit.prototype.getPoints = function(){return this.points;};
Habit.prototype.getStatus = function(){return this.status;};
Habit.prototype.getCompleted = function(){return this.completed;};
Habit.prototype.getTags = function(){return this.tags;};
Habit.prototype.getDifficulty = function(){return this.difficulty;};


