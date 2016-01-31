// var _ = require('underscore');
var Backbone = require('Backbone');
var $ = require('jquery');

var Songs = require('./collections/Songs.js');
var songData = require('./data/data.js');
var AppModel = require('./models/AppModel.js');
var AppView = require('./views/AppView.js');

var library = new Songs(songData);

window.app = new AppModel({library: library});

// build a view for the top level of the whole app
window.appView = new AppView({model: app});

// put the view onto the screen
$('body').append(appView.render());


//need to run webpack client/index.js client/bundle.js to generate bundle file

