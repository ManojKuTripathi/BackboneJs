var Human = Backbone.Model.extend({
  // If you return a string from the validate function,
  // Backbone will throw an error
  validate: function( attributes ){
    if( attributes.age < 0 ){
      return "You can't be negative years old";
    }
  },
  initialize: function(){
    alert("Welcome to this world");
  }
});

var human = new Human();
human.set({ name: "Mary Poppins", age: -1 }); 
console.log(human.isValid());
console.log(human.validationError);

human.set({ name: "Dr Manhatten", age: 0 });
console.log(human.isValid());
