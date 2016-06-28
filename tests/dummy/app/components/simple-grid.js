import Ember from "ember";

export default Ember.Component.extend({

  gridOptions: {
    columnDefs: [
      {
        headerName: "Product", field: "name"
      },
      {
        headerName: 'Units', field: 'units'
      },
      {
        headerName: 'Sales', field: 'sales'
      },
      {
        headerName: 'Profit', field: 'profit'
      }],
    rowData: [
      {
        name: 'Chips',
        units: '223',
        sales: '$54,335',
        profit: '$545,454'
      },
      {
        name: 'Towels',
        units: '965',
        sales: '$1,900',
        profit: '$800'
      }, 
      {
        name: 'Gloves',
        units: '213',
        sales: '$100,032',
        profit: '$22,004'
      }, 
      {
        name: 'Soap',
        units: '100',
        sales: '$1,0695',
        profit: '$5,112'
      },
      {
        name: 'Toys',
        units: '708',
        sales: '$14,430',
        profit: '$1,030'
      }, 
      {
        name: 'Mirrors',
        units: '9,901',
        sales: '$600',
        profit: '$30'
      }, 
      {
        name: 'Games',
        units: '5,000',
        sales: '$12,115',
        profit: '$15,321'
      },
      {
        name: 'Bicycles',
        units: '670',
        sales: '$2,00',
        profit: '$301'
      }, 
      {
        name: 'Helmets',
        units: '600',
        sales: '$200',
        profit: '$40'
      }, 
      {
        name: 'Shirts',
        units: '8,530',
        sales: '$5,465',
        profit: '$1,554'
      }],
      showToolPanel: true
  }
});