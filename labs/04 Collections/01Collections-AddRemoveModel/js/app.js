 var TodoItem = Backbone.Model.extend({});
 var TodoList = Backbone.Collection.extend({
 	model: TodoItem
 });

 var todoList = new TodoList([
 	new TodoItem({task:"Task1", status:"Open", id:"1"}),
 	new TodoItem({task:"Task2", status:"Open", id:"2"}),
 	new TodoItem({task:"Task3", status:"Open", id:"3"})
 	
 	]);

// Add a Model Instance
 var taskItem = new TodoItem({task:"Task4", status:"Open", id:"4"});
 todoList.add(taskItem);

//Get the Number of Model Instances
 console.log("Number of Model Instances:" + todoList.length);

// Get Model Instance at Index 1
 console.log(todoList.at(1));

 //Get Model by ID. By ModelID
 console.log(todoList.get(1));

 //List all the Models in the Collection
 console.log(todoList.models);



