SearchView = Backbone.View.extend({
    initialize: function(){
      alert("Alerts suck.");
    }
  });

  var search_view = new SearchView({ el: $("#search_container") });