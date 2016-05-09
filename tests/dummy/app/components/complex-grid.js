import Ember from "ember";

const {
  Component,
  computed
} = Ember;

export default Component.extend({

  theme: 'ag-bootstrap-striped',

  categories: computed(function() {
    let model = this.get('model');

    let columnDefs = [
      { headerName: 'Category', field: 'name', pinned: false },
      { headerName: 'Jan', field: 'jan' },
      { headerName: 'Feb', field: 'feb' },
      { headerName: 'Mar', field: 'mar' },
      { headerName: 'Apr', field: 'apr' },
      { headerName: 'May', field: 'may' },
      { headerName: 'Jun', field: 'jun' },
      { headerName: 'Jul', field: 'jul' },
      { headerName: 'Aug', field: 'aug' },
      { headerName: 'Sep', field: 'sep' },
      { headerName: 'Oct', field: 'oct' },
      { headerName: 'Nov', field: 'nov' },
      { headerName: 'Dec', field: 'dec' }

    ];

    let gridOptions = {
      columnDefs: columnDefs,
      rowData: model,
      rowHeight: 40,
      enableSorting: true,
      enableColResize: true,
      suppressCellSelection: true, //remove option to click on cell
    };

    return gridOptions;
  }),
  
  actions: {
    filterChanged(value) {
      this.get('categories').api.setQuickFilter(value);
    },
    selectTheme(theme) {
      this.set('theme', theme);
    }
  }

});