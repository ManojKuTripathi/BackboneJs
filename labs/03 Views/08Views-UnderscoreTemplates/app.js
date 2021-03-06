/*Using Underscore Templates*/

var TodoItem = Backbone.Model.extend({});
var todoItem = new TodoItem({task:'Create Backbone Course', status:'open', id:'1'});

var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',

    template: _.template('<h1>Task for today is <%= task%></h1>'),

    render: function() {
    	var attributes = this.model.attributes;
    	this.$el.html(this.template(attributes));
    }

});

var todoView = new TodoView({model: todoItem});
todoView.render();

console.log(todoView.el);

