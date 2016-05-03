/*global Backbone */
var app = app || {};

(function() {
    app.Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        }
    });
})();
