function Habit(title, notes, frequency){
    this.title = title;
    this.notes = notes;
    this.frequency = frequency
}

Habit.prototype.setTitle = function(t){this.title = t;};
Habit.prototype.setNote = function(t){this.note = t;};
Habit.prototype.setFrequency = function(t){this.frequency = t;};
Habit.prototype.getTitle = function(){return this.title;};

var h1 = new Habit("Test", "This is a test Habit" , 3);
function onClick(){
	console.log(h1.getTitle());
	alert("Hello");
}



