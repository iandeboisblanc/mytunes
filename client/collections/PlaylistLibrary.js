var PlaylistLibrary = Backbone.Collection.extend({
  model: PlaylistModel,

  initialize: function() {
    // this.on('enqueue', this.addToQueue);
  }

});