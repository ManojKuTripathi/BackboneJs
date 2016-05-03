var Human = Backbone.Model.extend({
  initialize: function(){
      alert("Welcome to this world");
  }
});

//var human = new Human({ name: "Thomas", age: 67});

// or we can set afterwards, these operations are equivalent
var human = new Human();

human.set({ name: "Thomas", age: 67});

console.log(human);