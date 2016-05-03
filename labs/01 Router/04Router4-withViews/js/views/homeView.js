
  var HomeView = Backbone.View.extend({
  		message: 'Welcome to Home Page',
        template: function(){
        	var htmlStr = '<h1>Home Page</h1>' + '<h4>' + this.message + '</h4>';
        	return htmlStr;
        },
        
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });