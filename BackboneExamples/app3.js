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

todoList.on('add', function(){
console.log('Add event fired');
});


//todoList.add(taskItem,{at:2});
todoList.push(taskItem);
//Attaching custom 	Events
todoList.on('event-name',function(){
console.log("Event took place");

});

todoList.trigger('event-name');

//reset event
todoList.on('reset',function(){
console.log('Reset event fired');
});

todoList.reset();

