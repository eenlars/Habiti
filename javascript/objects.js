var habit ={
    title: "",
    notes: "",
    tags: [],
    frequency: 0,
    points: 0,
    status: "",
    completed: false,
    difficulty: 0,
    Habit: function(title) {
        this.title = title;
        return this;
    },
    getTitle: function() {
        return this.title;
    }

};

var todo  = {
    title: "",
    tags: [],
    completed: false,
    deadline: Date,

};

var h1 = habit;
h1.Habit("test");
console.log(h1.title)






