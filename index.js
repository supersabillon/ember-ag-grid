/* jshint node: true */
'use strict';

var env = require('./config/environment')();

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
