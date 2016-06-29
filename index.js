/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ag-grid',

  included: function(app) {
    this._super.included(app);

    if (app.options.agGridEnterprise) {
      app.import(app.bowerDirectory + '/ag-grid-enterprise/dist/ag-grid-enterprise.min.js');
    } else {
    app.import(app.bowerDirectory + '/ag-grid/dist/ag-grid.min.js');
    }
  }
};
