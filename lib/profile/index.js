/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'profile',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  isDevelopingAddon() {
    return true;
  },
  included(...args) {
    this._super(...args);

    this.import('node_modules/moment/moment.js', {
      using: [
        { transformation: 'amd', as: 'moment' }
      ]
    });
  }
});
