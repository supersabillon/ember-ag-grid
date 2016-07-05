/* jshint node: true */
'use strict';
var fs = require('fs');
var path = require('path');

var fileExists = function (filePath) {
  try {
    return fs.statSync(filePath).isFile();
  }
  catch (err) {
    return false;
  }
};

// check context of how ember-ag-grid is being used - in an app or running the dummy app
var isApp = fileExists(path.join(__dirname, '../../config/environment.js'));
var configFile = isApp ? '../../config/environment' : './config/environment';
var env = require(configFile)();

module.exports = {
  name: 'ember-ag-grid',

  included: function(app) {
    this._super.included(app);

    if (typeof env.agGrid !== "undefined" && env.agGrid.useEnterprise) {
      app.import(app.bowerDirectory + '/ag-grid-enterprise/dist/ag-grid-enterprise.min.js');
    } else {
    app.import(app.bowerDirectory + '/ag-grid/dist/ag-grid.min.js');
    }
  }
};
