MyRouter = Backbone.Router.extend({
    routes: {
        'hello': 'sayHello',
        '': 'welcomeHome'
    },
    
    sayHello: function() {
        console.log('hi');
    },

    welcomeHome: function() {
        console.log("Welcome Home Buddy!")
    }

});

var router = new MyRouter();
Backbone.history.start();
