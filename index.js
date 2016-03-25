/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ag-grid',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ag-grid/dist/ag-grid.js');
  }
};
