var Human = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
    child: ''
  },
  initialize: function(){
    alert("Welcome to this world");
  },
  adopt: function( newChildsName ){
    this.set({ child: newChildsName });
  }
});

var human = new Human({ name: "Thomas", age: 67, child: 'Ryan'});
human.adopt('John Resig');
var child = human.get("child"); // 'John Resig'