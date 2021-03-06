var PlayerView = require('./PlayerView.js');
var SongQueueView = require('./SongQueueView.js');
var PlaylistLibraryView = require('./PlaylistLibraryView.js');
var LibraryView = require('./LibraryView.js');

// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  el: '<div class="row"><div class="col-sm-6 left"></div><div class="col-sm-6 right"></div></div>',
  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistLibraryView = new PlaylistLibraryView({collection: this.model.get('playlistLibrary')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    // console.log(this.playerView.$el);
    this.$el.find('.left').append(this.playerView.$el,
      this.libraryView.$el);
    this.$el.find('.right').append(this.queueView.$el,
      this.playlistLibraryView.$el);
    return this.$el;
  }

});

module.exports = AppView;