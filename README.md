# Ember-ag-grid

Just a simple component to use [ag-grid](https://github.com/ceolter/ag-grid/).

## Installation

```
ember install ember-ag-grid
```

## Usage

*app/templates/components/grid-exampple.hbs*
```handlebars
{{ ag-grid gridOptions=gridOptions }}
```

*app/components/grid-exampple.js*
```javascript

  gridOptions: computed(function() {

    let columnDefs = [
      { headerName: "Product", field: "name" },
      { headerName: 'Units', field: 'units' },
      { headerName: 'Sales', field: 'sales' },
      { headerName: 'Profit', field: 'profit' }

    ];

    let rowData = [
      {
        name: 'Chips',
        units: '223',
        sales: '$54,335',
        profit: '$545,454'
      },
      .
      .
      .
      {
        name: 'Towels',
        units: '965',
        sales: '$1,900',
        profit: '$800'
      }
    ];

    let gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData
    };

    return gridOptions;
  })

```

This addon supports the same options as the [ag-grid](https://github.com/ceolter/ag-grid/) library. These options are documented here: [https://www.ag-grid.com/documentation-main/documentation.php](https://www.ag-grid.com/documentation-main/documentation.php). Open up an issue if you find an option that does not work with this addon.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

