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

console.log('Age: ' + human.has('age'));
console.log('Name: ' + human.has('name'));
console.log('Child: ' + human.has('child'));