var Human=Backbone.Model.extend({
	defaults:{
	name: "Fetus",
	age:0,
	child: ''
	},
	
	initialize: function(){
	alert("welcome to this world");
	this.on("change:name",function(model){
		var name=model.get("name");
		alert("changed name is "+name);
	});

	},
	adopt: function(newChildName){
		this.set({child:newChildName});
	},
	validate: function(attributes){
		if(attributes.age<0){
			return "You cant be negative year old";
		}
	},
	getDetails:function(){
		console.log("From Parent class");
	}
});

var Indian=Human.extend({
	getDetails:function(){
		Human.prototype.getDetails.apply(this);
		console.log("From child class");
	}
});

var human=new Human();
//human.set({name:"manoj",age:"34", child:"Rhyan"});
console.log(human);
human.unset("age");
var age=human.get("age");
var name=human.get("name");
var child=human.get("child");
console.log("age: "+age+" name: "+name+" child: "+child);

console.log(human.has("age"));
console.log(human.has("name"));
human.adopt("John");

console.log(human.get("child"));
var attributes=human.attributes;
console.log(attributes);

attributes=human.toJSON();
console.log(attributes);
human.set({name:"manoj",age:"-1", child:"Rhyan"});

console.log(human.isValid());
console.log(human.validationError);

var indian=new Indian();
indian.getDetails();