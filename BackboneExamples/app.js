MyRouter=Backbone.Router.extend({

	routes: {
			'item/:id':'item',
			'hello/:name/:skill':'helloRoute',
			'hello/:name(/:skill)':'helloRoute2',
			'hello/:name/*path':'helloRoute3',
			'hello':'sayHello',
			'':'welcomeHome',
			'*default':'defaultRoute'
			},

			sayHello:function(){
				console.log('hi');
			},

			welcomeHome: function(){
				console.log("Welcome home Buddy");
			},

			//parameter in a route
			item: function(id){
				console.log('item Id: '+id);
			},

			//Multiple parameters in a route
			helloRoute: function(name,skill){
				console.log('Saying hello to: '+name+' '+skill+' author');
			},

			//Optional part in the route
			helloRoute2: function(name,skill){
				if(skill!==null){
				console.log('Saying hello to: '+name+' '+skill+' author');	
			} else {
				console.log('Saying hello to: '+name);
			}
			},
			//Match any no of parameters using *
			helloRoute3: function(name,path){
				console.log('Saying hello to: '+name+' and the value of the path variable is '+path);
			},
			defaultRoute: function () {
				console.log('This is not handled here');
			},
			homeRoute: function() {
				console.log('This is home route');
			}

		

});

var router=new MyRouter();
Backbone.history.start();