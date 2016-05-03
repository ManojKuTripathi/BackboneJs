/*Defining Events in Views
*/

var TodoItem = Backbone.Model.extend({});
var todoItem = new TodoItem({task:'Create Backbone Course', status:'open', id:'1'});

var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',

    events: {
    	"click h1": "onClick",
    	"mouseover h1": "onMouseover",
    	"mouseleave h1": "onMouseleave"
    },
    onClick: function(){
    	alert('Article clicked');
    },
    onMouseover: function(){
    	this.$el.css('background-color','red');
    },
    onMouseleave: function(){
    	this.$el.css('background-color','white');
    },
    template: _.template('<h1>Task for today is <%= task%></h1>'),
    render: function() {
    	var attributes = this.model.attributes;
    	this.$el.html(this.template(attributes));
    }

});

var todoView = new TodoView({model: todoItem});
todoView.render();

$('#container').html(todoView.el);
console.log(todoView.el);

