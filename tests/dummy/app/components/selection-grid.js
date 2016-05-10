import Ember from "ember";

export default Ember.Component.extend({

  player: null,
  
  players: [
    {
      name: 'Ashley Cole',
      position: 'Defender',
      number: 3,
      hometown: 'London, England',
      short_name: 'cole'
    },
    {
      name: 'Nigel de Jong',
      position: 'Midfielder',
      number: 34,
      hometown: 'Amsterdam, Netherlands',
      short_name: 'de_jong'
    },
    {
      name: 'A.J. DeLaGarza',
      position: 'Defender',
      number: 20,
      hometown: 'Bryans Road, MD',
      short_name: 'delagarza'
    },
    {
      name: 'Rafael Garcia',
      position: 'Midfielder',
      number: 25,
      hometown: 'Canoga Park, CA',
      short_name: 'garcia'
    },
    {
      name: 'Steven Gerrard',
      position: 'Midfielder',
      number: 8,
      hometown: 'Whiston, England',
      short_name: 'gerrard'
    },
    {
      name: 'Robbie Keane',
      position: 'Forward',
      number: 7,
      hometown: 'Dublin, Ireland',
      short_name: 'keane'
    },
    {
      name: 'Sebastian LLetget',
      position: 'Midfielder',
      number: 17,
      hometown: 'San Francisco, CA',
      short_name: 'lletget'
    },
    {
      name: 'Giovani dos Santos',
      position: 'Forward',
      number: 10,
      hometown: 'Mexico City, Mexico',
      short_name: 'santos'
    },
    {
      name: 'Daniel Steres',
      position: 'Defender',
      number: 44,
      hometown: 'Calabasas, CA',
      short_name: 'steres'
    },
    {
      name: 'Mike Magee',
      position: 'Midfielder',
      number: 18,
      hometown: 'Chicago, IL',
      short_name: 'magee'
    },
    {
      name: 'Robbie Rogers',
      position: 'Midfielder',
      number: 14,
      hometown: 'Huntington Beach, CA',
      short_name: 'rogers'
    },
    {
      name: 'Brian Rowe',
      position: 'Goalkeeper',
      number: 12,
      hometown: 'Eugene, OR',
      short_name: 'rowe'
    },
    {
      name: 'Gyazi Zardes',
      position: 'Forward',
      number: 11,
      hometown: 'Hawthorne, CA',
      short_name: 'zardes'
    }
  ],

  playersPreview: Ember.computed(function () {
    let columnDefs = [
      { headerName: 'Name', field: 'name', width: 158 },
      { headerName: 'Age', field: 'age', width: 80 },
      { headerName: 'Height', field: 'height', width: 80 },
      { headerName: 'Weight', field: 'weight', width: 80 }
    ];

    let rowData = [
      {
        number: 3,
        name: 'A. Cole',
        age: 35,
        height: '5\'9',
        weight: 146
      },
      {
        number: 34,
        name: 'N. de Jong',
        age: 31,
        height: '5\'9',
        weight: 160
      }, 
      {
        number: 20,
        name: 'A.J. DeLaGarza',
        age: 28,
        height: '5\'9',
        weight: 150
      }, 
      {
        number: 25,
        name: 'R. Garcia',
        age: 27,
        height: '5\'6',
        weight: 150
      },
      {
        number: 8,
        name: 'S. Gerrard',
        age: 35,
        height: '6\'0',
        weight: 183
      }, 
      {
        number: 7,
        name: 'R. Keane',
        age: 35,
        height: '5\'9',
        weight: 160
      }, 
      {
        number: 17,
        name: 'S. Lletget',
        age: 23,
        height: '5\'10',
        weight: 165
      },
      {
        number: 10,
        name: 'G. Dos Santos',
        age: 26,
        height: '5\'10',
        weight: 157
      }, 
      {
        number: 44,
        name: 'D. Steres',
        age: 25,
        height: '6\'10',
        weight: 175
      }, 
      {
        number: 18,
        name: 'M. Magee',
        age: 31,
        height: '5\'10',
        weight: 160
      },
      {
        number: 14,
        name: 'R. Rogers',
        age: 28,
        height: '5\'10',
        weight: 165
      }, 
      {
        number: 12,
        name: 'B. Rowe',
        age: 27,
        height: '6\'1',
        weight: 185
      }, 
      {
        number: 11,
        name: 'G. Zardes',
        age: 24,
        height: '6\'2',
        weight: 175
      }];
      
    let gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      headerHeight: 25,
      suppressMovableColumns: true,
      rowHeight: 25,
      enableSorting: true,
      rowSelection: 'single', 
      onSelectionChanged: () => {
        let selectedRows = this.get('playersPreview').api.getSelectedRows();
        this.updatePlayer(selectedRows[0].number);
      },
      onGridReady: function () {
        // set Default
        this.api.forEachNode( function (node) {
            if (node.data.number === 3) {
                node.setSelected(true);
            }
        });
      }
    };
    
    return gridOptions;
  }),

  updatePlayer(number) {
    let players = this.get('players');
    let selectedPlayer = players.filter(function (value) {
      return value.number === number;
    });

    this.set('player', selectedPlayer[0]);
  }
});