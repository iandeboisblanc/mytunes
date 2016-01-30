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
      this.collection.saveList();
      $('.list_header input').css('height', '25px');
      $('.list_header input').css('padding', '1px');
      $('.list_header input').css('border', '2px');

    }
  },

  render: function() {
    this.$el.html('<th class="list_header">Queue' +
      '<button class="clear">Clear</button>' +
      '<button class="save_queue">Save As Playlist</button>' +
      '<input></input></th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
