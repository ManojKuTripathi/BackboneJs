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

  todoList.on('add', function(){
  	console.log('Add Event fired');
  });
  //todoList.add(taskItem, {at:2});
  todoList.push(taskItem);

//Attaching Custom Events
  todoList.on('event-name', function(){
  	console.log('Event took place');
  })
 
 todoList.trigger('event-name');

// reset Event
 todoList.on('reset', function(){
  	console.log('Reset Event fired');
  });

 todoList.reset();
//Switching off reset event
todoList.off('reset');
todoList.reset();

// Similarly we can listen to destroy, sync and error events

