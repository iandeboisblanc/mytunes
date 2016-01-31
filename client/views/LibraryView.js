var LibraryEntryView = require('./LibraryEntryView.js');
// var _ = require('underscore');
// var $ = require('jquery');
// var Backbone = require('Backbone');

// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();
    this.$el.html('<th class="list_header">Library</th>').append(
        '<tr><td class="lib_header">Artist</td><td class="lib_header">Title</td><td class="lib_header">Play Count</td></tr>').append(
        this.collection.map(function(song) {
          return new LibraryEntryView({model: song}).render();
        })
    );
  }

});

module.exports = LibraryView;