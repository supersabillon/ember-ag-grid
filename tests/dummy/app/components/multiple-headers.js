import Ember from "ember";

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  
  departments: computed(function() {
    let model = this.get('model');

    let columnDefs = [
      { headerName: "Office", field: "office", pinned: true, suppressMenu: true, width: 100 },
      { headerName: "Sales Rep", field: "sales_rep", pinned: true, suppressMenu: true },
      { headerName: "Year", 
          children: [
            { headerName: "Total", field: "total", width: 150, columnGroupShow: 'closed'},
            { headerName: "2010", field: "year_2010", width: 150, columnGroupShow: 'open'},
            { headerName: "2011", field: "year_2011", width: 150, columnGroupShow: 'open'},
            { headerName: "2012", field: "year_2012", width: 150, columnGroupShow: 'open'},
            { headerName: "2016", field: "year_2016", width: 150, columnGroupShow: 'open'},
            { headerName: "2014", field: "year_2014", width: 150, columnGroupShow: 'open'},
            { headerName: "2015", field: "year_2015", width: 150, columnGroupShow: 'open'},
            { headerName: "2016", field: "year_2016", width: 150, columnGroupShow: 'open'}
          ]}

    ];
    
    let gridOptions = {
      columnDefs: columnDefs,
      rowData: model,
      rowHeight: 40,
      headerHeight: 25,
      suppressCellSelection: true, //remove option to click on cell
      suppressMovableColumns: true //remove option to move columns
    };
    
    return gridOptions;
  })

});