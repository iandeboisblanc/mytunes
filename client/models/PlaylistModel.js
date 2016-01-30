var PlaylistModel = Backbone.Model.extend({

  initialize: function() {
    // this.set('title', title);
    // this.set('songs', []);
  },

  loadPlaylist: function() {
    console.log('loadPlaylist');
    this.trigger('loadPlaylist', this);
  }

});

