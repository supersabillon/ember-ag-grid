import Ember from "ember";

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  
  materials: computed(function() {
    let model = this.get('model');

    model.forEach(function(item, index) {
        item.isHeader = index % 5 === 0;
    });
   
    let columnDefs = [
      {headerName: 'Material', field: 'material', width: 150, pinned: true,
       cellRenderer: function(params) {
        return params.data.isHeader ? params.value : '';
       },
        cellClass: 'ag-grid-header'
      },
      {headerName: 'Type', field: 'type', pinned: true, width: 200},
      {headerName: "Jan", field: "jan", width: 100},
      {headerName: "Feb", field: "feb", width: 100},
      {headerName: 'Mar', field: 'mar', width: 80},
      {headerName: 'Apr', field: 'apr', width: 80},
      {headerName: 'Jun', field: 'jun', width: 80},
      {headerName: 'Jul', field: 'jul', width: 80},
      {headerName: 'Aug', field: 'aug', width: 80},
      {headerName: 'Sep', field: 'sep', width: 80},
      {headerName: 'Oct', field: 'oct', width: 80},
      {headerName: 'Nov', field: 'nov', width: 80},
      {headerName: 'Dec', field: 'dec', width: 80}
    ];


    let gridOptions = {
      columnDefs: columnDefs,
      rowData: model,
      headerHeight: 30,
      suppressMovableColumns: true,
      rowHeight: 40,
      suppressCellSelection: true //remove option to click on cell
    };
    
    return gridOptions;
  })

});