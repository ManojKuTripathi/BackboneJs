/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function($) {
    app.TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item-template').html()),
        events: {
            'click .destroy': 'clear',
            'click .toggle': 'toggleCompleted',
        },
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('completed', this.model.get('completed'));
            return this;
        },
        // Toggle the `"completed"` state of the model.
        toggleCompleted: function() {
            this.model.toggle();
        },
        clear: function() {
            this.model.destroy();
        }

    });
})(jQuery);
