/*Using Underscore template*/

var TodoItem=Backbone.Model.extend({});
var todoItem=new TodoItem({task:'Create backbone course', status:'open',id:'1'});

var TodoView=Backbone.View.extend({
	tagName: 'article',
	id:'view',
	className: 'views',
	template: _.template('<h1> Task for today <%= task%.></h1>'),
	render:function(){
		var attributes=this.model.attributes;
		this.$el.html(this.template(attributes));

	}
});
 