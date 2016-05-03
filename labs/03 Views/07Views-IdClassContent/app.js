/*Creating View
Changing the Top Level Element
Adding Id and Class Attribute
Access the content of the View*/


var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',

    render: function() {
    	var content = '<div> A Simple View </div>';
    	this.$el.html(content);
    }

});

var todoView = new TodoView();
todoView.render();

console.log(todoView.el);
console.log(todoView.$el.html());
