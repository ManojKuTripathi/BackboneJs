/*global Backbone */
var app = app || {};

(function() {
    'use strict';
    var Todos = Backbone.Collection.extend({
        model: app.Todo,
        localStorage: new Backbone.LocalStorage('todos-backbone'),
    });

    // Create our global collection of **Todos**.
    app.todos = new Todos();
})();
