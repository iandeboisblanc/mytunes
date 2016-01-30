// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.on('enqueue', this.addToQueue);
  },

  playFirst: function() {
    //get song at top of queue
    if(this.length > 0 ){
      var firstSong = this.shift();

      //trigger play with this song
      firstSong.play();
      //App should take care fo the rest
    }
  },

  saveList: function(listName) {
    this.passName = listName;
    this.trigger('saveList', this);
  }

});