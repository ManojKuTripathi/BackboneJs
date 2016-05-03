var Human = Backbone.Model.extend({
  getDetails: function(){
    console.log('From Parent Class');
  }
});

var Indian = Human.extend({
  getDetails: function(){
    Human.prototype.getDetails.apply(this);
    console.log('From Child Class');
  }
});

var indian = new Indian();
indian.getDetails();
