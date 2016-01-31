// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var _ = require('underscore');
var Backbone = require('Backbone');

var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }});

module.exports = SongQueueEntryView;