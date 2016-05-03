 var TodoItem = Backbone.Model.extend({});
 var TodoList = Backbone.Collection.extend({
 	model: TodoItem
 });

 var todoList = new TodoList([
 	new TodoItem({task:"Task1", status:"Open", id:"1"}),
 	new TodoItem({task:"Task2", status:"Open", id:"2"}),
 	new TodoItem({task:"Task3", status:"Open", id:"3"})
 	
 	]);

// Add a Model Instance at a particular Index
 var taskItem = new TodoItem({task:"Task4", status:"Open", id:"4"});
 var taskItem1 = new TodoItem({task:"Task5", status:"Closed", id:"5"});
 todoList.add(taskItem, {at:2});
 todoList.push(taskItem1);


 //List all the Models in the Collection
 console.log(todoList.models);

//Search with Where - Returns an Array
 var openItems = todoList.where({status:"Open"});
 console.log(openItems);

 //Search with findWhere
 var firstMatch = todoList.findWhere({status:"Open"});
 console.log(firstMatch);

 //Multiple Search Criteria
 var item = todoList.where({status:"Open", task:"Task4"});
 console.log(item);

//filter method for customized searches
var findItemsByStatusAndID = todoList.filter(function(todoItem){
	return todoItem.get("status")=="Open" && todoItem.get("id") > 2
});

console.log(findItemsByStatusAndID);

//Iterating the Collection
todoList.each(function(todoItem){
	console.log(todoItem);
})