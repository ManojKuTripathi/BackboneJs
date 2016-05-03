var UserModel = Backbone.Model.extend({
    urlRoot: 'http://localhost:9090/ngdemo/web/users',
    defaults: {
        firstName: '',
        lastName: ''
    }
});


//GETTING THE MODEL
var user = new UserModel({id: 9});
user.fetch({
    success: function (user) {
        console.log(JSON.stringify(user));
    }
})

//SAVING THE MODEL
var user = new UserModel();
var userDetails = {
    firstName: 'Thomas',
    lastName: 'Cook'
};
user.save(userDetails, {
    success: function (user) {
        console.log(JSON.stringify(user));
    }
});


// DELETING THE MODEL
var user = new UserModel({id: 11});
user.destroy({
  success: function () {
    alert('Destroyed');
  }
});



// UPDATING THE MODEL 
var user = new UserModel({
  id: 1,
  firstName: 'Thomas',
  lastName: 'Cook'
});

user.save({firstName: 'Davis'}, {
  success: function (model) {
    alert(JSON.stringify(user));
  }
});


