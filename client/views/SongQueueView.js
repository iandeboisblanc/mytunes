var SongQueueEntryView = require('./SongQueueEntryView.js');
var $ = require('jquery');
// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //might need to add remove/add
    this.collection.on('add change remove reset', this.render, this);
    this.render();
  },

  events: {
    'click .clear': function() {
      this.collection.reset();    
    },
    'click .save_queue': function() {
      $('.list_header input').css('height', '25px');
      $('.list_header input').css('padding', '1px');
      $('.list_header input').css('border', '2px');

    },
    'keypress input': function(e) {
      if(e && e.keyCode === 13) {
        var input = e.target.value;
        e.target.value = '';
        $('.list_header input').css('border', '0px');
        $('.list_header input').css('padding', '0px');
        $('.list_header input').css('height', '0px');
        this.collection.saveList(input);
      }
    }
  },

  render: function() {
    this.$el.html('<th class="list_header" id="queue_header" colspan=2>Queue' +
      '<button class="clear">Clear</button>' +
      '<button class="save_queue">Save As Playlist</button>' +
      '<input></input></th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

module.exports = SongQueueView;