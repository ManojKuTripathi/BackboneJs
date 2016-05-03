MyRouter = Backbone.Router.extend({
    routes: {
        'home': 'homeRoute',
        'about': 'aboutRoute',
        'contact': 'contactRoute'
    },

    homeRoute: function() {
         var homeView = new HomeView();          
          $("#content").html(homeView.el);
    },

    aboutRoute: function() {
         var aboutView = new AboutView();          
          $("#content").html(aboutView.el);
    },

    contactRoute: function(){
    	var contactView = new ContactView();          
          $("#content").html(contactView.el);
    }

});

var router = new MyRouter();
Backbone.history.start();
