var Human = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
    child: ''
  },
  initialize: function(){
    alert("Welcome to this world");
  }
});

var human = new Human({ name: "Thomas", age: 67});
var attributes = human.toJSON(); // { name: "Thomas", age: 67}
// This simply returns a copy of the current attributes.
console.log(attributes);

var attributes = human.attributes;
console.log(attributes);

