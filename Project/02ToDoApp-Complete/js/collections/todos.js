/*global Backbone */
var app = app || {};

(function () {
	'use strict';
	var Todos = Backbone.Collection.extend({
		model: app.Todo,
		localStorage: new Backbone.LocalStorage('todos-backbone'),
		completed: function () {
			return this.where({completed: true});
		},
		remaining: function () {
			return this.where({completed: false});
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **Todos**.
	app.todos = new Todos();
})();
