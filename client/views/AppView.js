// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  el: '<div class="row"><div class="col-md-6 left"></div><div class="col-md-6 right"></div></div>',
  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});

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
    this.$el.find('.right').append(this.queueView.$el);
    return this.$el;
  }

});
