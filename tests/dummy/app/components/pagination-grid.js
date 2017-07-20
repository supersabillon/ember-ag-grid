import Ember from "ember";

const {
  Component,
  computed
} = Ember;

export default Component.extend({

  contacts: computed(function() {
    let model = this.get('model');
    let pageSize = 100;

    let columnDefs = [
      { headerName: "#", width: 50, 
        cellRenderer: function(params) {
        return params.node.id + 1;
       } 
      },
      { headerName: "Prefix", field: "prefix", width: 60, pinned: true},
      { headerName: 'First Name', field: 'name', width: 100 },
      { headerName: 'Last Name', field: 'last_name', width: 140 },
      { headerName: 'Job Title', field: 'job' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Username', field: 'username', width: 140 },
      { headerName: 'Phone', field: 'phone' },
      { headerName: 'Website', field: 'website' },
      { headerName: 'Address', field: 'address' },
      { headerName: 'City', field: 'city' },
      { headerName: 'State', field: 'state', width: 60 }
    ];
    
    let gridOptions = {
      columnDefs: columnDefs,
      rowHeight: 40,
      rowModelType: 'pagination',
      suppressCellSelection: true, //remove option to click on cell
      suppressMovableColumns: true, //remove option to move columns
      paginationPageSize: pageSize,
      onGridReady: () => {
       this.createNewDatasource(model);
      } 
     };

    return gridOptions;
  }),
  
  createNewDatasource(data) {
    if (!data) {
        // in case user selected 'onPageSizeChanged()' before the json was loaded
        return;
    }

    let dataSource = {
        //rowCount: ???, - not setting the row count, infinite paging will be used
        getRows: function (params) {
            // this code should contact the server for rows. however for the purposes of the demo,
            // the data is generated locally, a timer is used to give the experience of
            // an asynchronous call
            /* eslint-disable no-console */
            console.log('asking for ' + params.startRow + ' to ' + params.endRow);
            /* eslint-enable no-console */
            setTimeout( function() {
                // take a chunk of the array, matching the start and finish times
                let rowsThisPage = data.slice(params.startRow, params.endRow);
                // see if we have come to the last page. if we have, set lastRow to
                // the very last row of the last page. if you are getting data from
                // a server, lastRow could be returned separately if the lastRow
                // is not in the current page.
                let lastRow = -1;
                if (data.length <= params.endRow) {
                    lastRow = data.length;
                }
                params.successCallback(rowsThisPage, lastRow);
            }, 500);
        }
    };

    this.get('contacts').api.setDatasource(dataSource);
  },
    
  actions: {
    selectPagination(pageSize) {
      this.get('contacts').paginationPageSize = Number(pageSize);
      this.createNewDatasource(this.get('model'));
    }
  }
  
});