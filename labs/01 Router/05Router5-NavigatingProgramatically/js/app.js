MyRouter = Backbone.Router.extend({
	routes:{'hello': 'sayHello',
			'':'welcomeHome'},
	sayHello: function(){
		console.log('hi');
	},

	welcomeHome: function(){
		console.log("Welcome Home!")
	}

});

var router = new MyRouter();
Backbone.history.start();

router.navigate('hello', {trigger: true});