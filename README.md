# Ember-ag-grid

[![Ember Observer Score](http://emberobserver.com/badges/ember-ag-grid.svg)](http://emberobserver.com/addons/ember-ag-grid)
[![npm version](https://badge.fury.io/js/ember-ag-grid.svg)](https://badge.fury.io/js/ember-ag-grid)

Just a simple component to use [ag-grid](https://github.com/ceolter/ag-grid/).

## Installation

```
ember install ember-ag-grid
```

## Usage

*app/templates/components/grid-example.hbs*
```handlebars
{{ ag-grid gridOptions=gridOptions }}
```

*app/components/grid-example.js*
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

## Options

| name | default | description |
| --- | --- | --- |
| width | "100%" | Sets width of grid |
| height | "100%" | Sets height of grid |
| theme | "ag-fresh" | ag-Grid provides three themes: ag-fresh, ag-blue and ag-dark |

Example:

```handlebars
{{ ag-grid gridOptions=gridOptions height="500px" width="800px" theme="ag-blue" }}
```

You could create a new theme and pass in the class name your theme uses:

```css
.newTheme .ag-root {
  font-family: "Open Sans", sans-serif, Helvetica, Arial;
}
.newTheme .ag-cell {
  padding: 8px;
}
```

```handlebars
{{ ag-grid gridOptions=gridOptions theme="newTheme" }}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

