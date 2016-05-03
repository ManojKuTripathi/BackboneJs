MyRouter = Backbone.Router.extend({
    routes: {
        'item/:id': 'item',
        'hello/:name/:skill': 'helloRoute',
        'hello/:name(/:skill)': 'helloRoute2',
        'hello/:name/*path': 'helloRoute3'
    },

    //Parameter in a Route
    item: function(id) {
        console.log('ItemId: ' + id);
    },

    //Multiple parameters in the Route
    helloRoute: function(name, skill) {
        console.log('Saying hello to ' + name + ' ' + skill + ' author');
    },

    //Optional part in the route
    helloRoute2: function(name, skill) {
        if (skill !== null) {
            console.log('Saying hello to ' + name + ' ' + skill + ' author');
        } else {
            console.log('Saying hello to ' + name);
        }
    },

    //Match any number of parameters using *
    helloRoute3: function(name, path){
    	console.log('Saying Hello to' + name + 'and value of path variable is ' + path);
    }


});

var router = new MyRouter();
Backbone.history.start();
