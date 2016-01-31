var PlaylistLibraryEntryView = require('./PlaylistLibraryEntryView.js');
// LibraryView.js - Defines a backbone view class for the music library.
var PlaylistLibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('change add remove', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();

    this.$el.html('<th class="list_header" id="playlists_header">Playlists</th>').append(
        this.collection.map(function(playlist) {
          return new PlaylistLibraryEntryView({model: playlist}).render();
        })
    );
  }

});

module.exports = PlaylistLibraryView;