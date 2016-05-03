/*Defining Events in Views
 */

var TodoItem = Backbone.Model.extend({
    urlRoot: "http://localhost:9090",
    changeStatus: function() {
        if (this.get('status') === 'open') {
            this.set({ status: 'complete' });
        } else {
            this.set({ status: 'open' });
        }
    }
});
var todoItem = new TodoItem({ task: 'Create Backbone Course', status: 'open', id: '1' });

var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',
    initialize: function(){
        this.model.on('change', this.render,this);
        this.model.on('destroy', this.remove,this);
    },
    events: {
        "change input": "changeStatus"
    },
    changeStatus: function() {
        this.model.changeStatus();
    },
    remove:function(){
        this.$el.remove();
    },
    template: _.template('<span class="<%= status %>"><input type="checkbox" />Task for today is <%= task%></span>'),
    render: function() {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));
    }

});

var todoView = new TodoView({ model: todoItem });
todoView.render();

$('#container').html(todoView.el);
console.log(todoView.el);
