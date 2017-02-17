module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'ag-grid', target: '^8.0.1'},
      { name: 'ag-grid-enterprise', target: '^8.0.1'}]);
  }
};