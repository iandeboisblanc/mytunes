var SongModel = require('./SongModel.js');
var PlaylistModel = require('./PlaylistModel.js');
var SongQueue = require('../collections/SongQueue.js');
var PlaylistLibrary = require('../collections/PlaylistLibrary.js');


// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('playlistLibrary', new PlaylistLibrary());

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song); 
      if(this.get('currentSong').get('url') === undefined) {
        this.get('songQueue').playFirst();
      } 
    }, this);

    params.library.on('ended', function(song) {
      if(this.get('songQueue').length>0) {
        this.get('songQueue').playFirst();
      } else {
        this.set('currentSong', new SongModel());
      }
    }, this);

    this.get('songQueue').on('saveList', function(songQueue) {
      var playlist = new PlaylistModel({title:songQueue.passName, songs:songQueue.models});
      this.get('playlistLibrary').add(playlist);
    }, this);

    this.get('playlistLibrary').on('loadPlaylist', function(playlist){
      //queue to reset
      this.get('songQueue').reset(playlist.get('songs'));
      //queue to pull songs from playlist
    }, this);

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);
  }

});

module.exports = AppModel;
