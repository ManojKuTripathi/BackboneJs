var Human = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
    child: 'Default Child'
  },
  initialize: function(){
    alert("Welcome to this world");
  }
});

var human = new Human();

var age = human.get("age"); // 67
var name = human.get("name"); // "Thomas"
var child = human.get("child"); // 'Ryan'

console.log(age + "  " + name + "  " + child);