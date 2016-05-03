  var ContactView = Backbone.View.extend({
        message: 'Welcome to Contacts Page',
        template: function(){
        	var htmlStr = '<h1>Contacts Page</h1>' + '<h4>' + this.message + '</h4>';
        	return htmlStr;
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });