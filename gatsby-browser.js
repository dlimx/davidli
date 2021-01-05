// Load static fonts
require('@fontsource/rubik');
require('@fontsource/open-sans');

exports.onInitialClientRender = require('./src/gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./src/gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./src/gatsby/browser/shouldUpdateScroll');
