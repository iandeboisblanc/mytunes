// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

  // nowPlaying: `<div><h5>Now Playing:</h5></div><div>${this.model.get('title')} by ${this.model.get('artist')}</div>`,
  el: '<div><h3 class="now_playing">Now Playing:</h3><div class="current_song"></div><audio controls autoplay /></div>',

  setSong: function(song) {
    this.model = song;
    this.render(true);
    this.$el.find('audio').on("ended", this.model.ended.bind(this.model));
  },

  render: function(setSong) {
    if(setSong) {
      this.$el.find('.current_song').text(`${this.model.get('title')} by ${this.model.get('artist')}`);
    }
    this.$el.find('audio').attr('src', this.model ? this.model.get('url') : '');
    return this.$el;
  }

});
