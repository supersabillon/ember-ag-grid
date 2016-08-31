module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'ag-grid', target: '^5.3.0'},
      { name: 'ag-grid-enterprise', target: '^5.3.0'}]);
  }
};