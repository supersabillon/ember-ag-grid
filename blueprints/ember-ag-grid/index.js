module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'ag-grid', target: '^4.2.7'},
      { name: 'ag-grid-enterprise', target: '^4.2.11'}]);
  }
};