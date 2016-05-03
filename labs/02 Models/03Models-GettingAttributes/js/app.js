var Human = Backbone.Model.extend({
  initialize: function(){
      alert("Welcome to this world");
  }
});

var human = new Human({ name: "Thomas", age: 67, child: 'Ryan'});

var age = human.get("age"); // 67
var name = human.get("name"); // "Thomas"
var child = human.get("child"); // 'Ryan

console.log(age + "  " + name + "  " + child);