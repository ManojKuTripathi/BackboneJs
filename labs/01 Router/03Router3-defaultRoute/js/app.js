MyRouter = Backbone.Router.extend({
    routes: {
        '': 'homeRoute',
        'hello': 'sayHello',
         '*default': 'defaultRoute'
    },
    sayHello: function() {
        console.log('hello');
    },

    defaultRoute: function() {
        console.log("This Route is not handled here")
    },

    homeRoute: function() {
        console.log('This is Home Route')
    }

});

var router = new MyRouter();
Backbone.history.start();
