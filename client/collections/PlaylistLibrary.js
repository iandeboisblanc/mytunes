var PlaylistModel = require('../models/PlaylistModel');

var PlaylistLibrary = Backbone.Collection.extend({
  model: PlaylistModel,

  initialize: function() {
    // this.on('enqueue', this.addToQueue);
  }

});

module.exports = PlaylistLibrary;