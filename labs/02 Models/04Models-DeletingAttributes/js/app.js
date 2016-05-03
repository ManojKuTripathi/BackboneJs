var Human = Backbone.Model.extend({
  initialize: function(){
      alert("Welcome to this world");
  }
});

var human = new Human({ name: "Thomas", age: 67, child: 'Ryan'});

human.unset('age');

var age = human.get("age"); // 67
var name = human.get("name"); // "Thomas"
var child = human.get("child"); // 'Ryan

console.log('Age: ' + age);
console.log('Name: ' + name);
console.log('Child: ' + child);