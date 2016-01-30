var PlaylistLibraryEntryView = Backbone.View.extend({
  tagName: 'tr',

  render: function(){
    return this.$el.html(`<td>${this.model.get('title')}</td>`);
  }
});
