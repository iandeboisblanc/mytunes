var PlaylistLibraryEntryView = Backbone.View.extend({
  tagName: 'tr',
  
  events: {
    'click': function() {
      this.model.loadPlaylist();
    }
  },

  render: function(){
    return this.$el.html(`<td>${this.model.get('title')}</td>`);
  }


});

module.exports = PlaylistLibraryEntryView;