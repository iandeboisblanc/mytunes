var PlaylistModel = Backbone.Model.extend({

  initialize: function() {
    // this.set('title', title);
    // this.set('songs', []);
  },

  loadPlaylist: function() {
    this.trigger('loadPlaylist', this);
  }

});

module.exports = PlaylistModel;