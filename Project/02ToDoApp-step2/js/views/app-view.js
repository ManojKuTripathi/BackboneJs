/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function($) {
    app.AppView = Backbone.View.extend({
        el: '.todoapp',
        events: {
            'keypress .new-todo': 'createOnEnter'
        },
        initialize: function() {
            this.$input = this.$('.new-todo');
            this.$list = $('.todo-list');

            this.listenTo(app.todos, 'add', this.addOne);
            this.listenTo(app.todos, 'reset', this.addAll);
            app.todos.fetch({ reset: true });
        },
        addOne: function(todo) {
            var view = new app.TodoView({ model: todo });
            this.$list.append(view.render().el);
        },
        addAll: function() {
            this.$list.html('');
            app.todos.each(this.addOne, this);
        },


        // Generate the attributes for a new Todo item.
        newAttributes: function() {
            return {
                title: this.$input.val().trim(),
                order: app.todos.nextOrder(),
                completed: false
            };
        },

        // If you hit return in the main input field, create new **Todo** model,
        // persisting it to *localStorage*.
        createOnEnter: function(e) {
            if (e.which === ENTER_KEY && this.$input.val().trim()) {
                app.todos.create(this.newAttributes());
                this.$input.val('');
            }
        },

    });
})(jQuery);
