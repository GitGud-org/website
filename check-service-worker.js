'use strict';

var fs = require('fs');

var manifest = require('./build/asset-manifest');
var sw = fs.readFileSync('./build/service-worker.js');

Object.keys(manifest).forEach(key => {
  if (key.endsWith('.map')) {
    return;
  }
  var path = manifest[key];
  if (sw.indexOf(path) === -1) {
    throw new Error('Not cached: ' + manifest[key]);
  }
});
