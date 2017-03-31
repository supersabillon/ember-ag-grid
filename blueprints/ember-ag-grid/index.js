module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'ag-grid', target: '^9.0.0'},
      { name: 'ag-grid-enterprise', target: '^9.0.1'}]);
  }
};