/*global Backbone */
var app = app || {};

(function() {
    'use strict';
    var Todos = Backbone.Collection.extend({
        model: app.Todo,
        localStorage: new Backbone.LocalStorage('todos-backbone'),
        nextOrder: function() {
            return this.length ? this.last().get('order') + 1 : 1;
        },
        comparator: 'order'
    });

    // Create our global collection of **Todos**.
    app.todos = new Todos();
})();
