var SongModel = require('../models/SongModel.js')
// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

});

module.exports = Songs;