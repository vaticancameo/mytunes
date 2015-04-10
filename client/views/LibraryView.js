
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('all', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
