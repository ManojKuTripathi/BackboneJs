var TodoItem=Backbone.Model.extend({});

var TodoList=Backbone.Collection.extend({
	model:TodoItem
	});

var todoList=new TodoList([
	new TodoItem({task:"Task1",status:"Open",id:"1"}),
	new TodoItem({task:"Task2",status:"Open",id:"2"}),
	new TodoItem({task:"Task3",status:"Open",id:"3"})
]);

//Add a model instance
var taskItem=new TodoItem({task:"Task4",status:"Open",id: "4"});
//todoList.add(taskItem);

//Get the no of model instances
console.log("Number of instance models: "+todoList.length);

//Get model instance at index 1
console.log(todoList.at(1));

//Get model by ID. By model ID
console.log(todoList.get(1));

//List all the models in the collection
console.log(todoList.models);

//Remove a model instance
todoList.remove(todoList.at(1));

var taskItem1=new TodoItem({task:"Task5",status:"Closed",id: "5"});
todoList.add(taskItem,{at:2});
todoList.push(taskItem1);

//Search with Where -Returns an Array
var openItems=todoList.where({status:"Open"});
console.log(openItems);

//Search with find where
var firstMatch=todoList.findWhere({status:"Open"});
console.log(firstMatch);

//Multiple search criteria
var item=todoList.where({status:"Open",task:"Task4"});
console.log(item);

//filter method for customize search
var findItemByStatusAndID=todoList.filter(function(todoItem){
	return todoItem.get("status")=="Open" && todoItem.get("id")>2
});

console.log(findItemByStatusAndID);

//Iterating the collections
todoList.each(function(todoItem){
console.log(todoItem);
});
