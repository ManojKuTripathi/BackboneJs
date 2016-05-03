/*Defining Events in Views
 */
var user = "SkillBakery.com";

var TodoItem = Backbone.Model.extend({});
var todoItem = new TodoItem({ task: 'Create Backbone Course', status: 'open', id: '1' });

var TodoView = Backbone.View.extend({
    id: 'view',
    className: 'views',
    template: _.template('<span class="<%= status %>"><input type="checkbox" />Task for today is <%= task%></span>'),
    initialize: function(options){
    	this.company = options.company;
    },
    render: function() {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));
    }

});

var todoView = new TodoView({
    model: todoItem,
    el: $('#container'),
    company: user
});

todoView.render();

console.log(todoView.company);


