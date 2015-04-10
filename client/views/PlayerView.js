// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', (function () { this.model.ended() }).bind(this) );
  },

  setSong: function(song){
    this.model = song;
    if(!this.model.get('url')){
      this.el.pause();
    }
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url') || '');
  }

});
