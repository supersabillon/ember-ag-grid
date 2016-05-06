import Ember from "ember";

export default Ember.Component.extend({

  gridOptions: {
    columnDefs: [
      {headerName: "Time", field: "labels", width: 150,
        cellRenderer: 'group',
        cellRendererParams: {
          innerRenderer: function (params) {
              return  params.data.labels;
            }
        }
      },
      {headerName: "Leads Assigned",
       field: "leads",
       width: 150,
       cellStyle: function () {
         return {'text-align': 'right'};
       }
      },
      {headerName: "Call Count", field: "call_count", width: 150,
       cellStyle: function () {
         return {'text-align': 'right'};
       }
      }],


    rowData: [
      {
        folder: true,
        open: true,
        labels: 'January',
        children: [
          {
            folder: true,
            labels: 'Week 1',
            leads: '15,525',
            call_count: '79,098',
            children: [
              {labels: 'John Smith', leads:'2,994', call_count: '80'},
              {labels: 'Paul White', leads: '8,123', call_count: '55,445'},
              {labels: 'David Brown', leads: '4,318', call_count: '23,573'}
            ]
          },
          {
            folder: true,
            labels: 'Week 2',
            leads: '882',
            call_count: '240,260',
            children: [
              {labels: 'John Smith', leads:'424.00', call_count: '86,234'},
              {labels: 'Paul White', leads: '214.00', call_count: '90,778'},
              {labels: 'David Brown', leads: '244.00', call_count: '63,248'}
            ]
          },
          {
            folder: true,
            labels: 'Week 3',
            leads: '2,102',
            call_count: '20,941',
            children: [
              {labels: 'John Smith', leads:'449.00', call_count: '3,628'},
              {labels: 'Paul White', leads: '855', call_count: '7,325'},
              {labels: 'David Brown', leads: '798.00', call_count: '9,988'}
            ]
          },
          {
            folder: true,
            labels: 'Week 4',
            leads: '15,976',
            call_count: '6,909',
            children: [
              {labels: 'John Smith', leads:'2,697', call_count: '2,159'},
              {labels: 'Paul White', leads: '5,937', call_count: '150'},
              {labels: 'David Brown', leads: '7,342', call_count: '4,600'}
            ]
          }
        ]
      },
      {
        folder: true,
        open: true,
        labels: 'February',
        children: [
            {labels: 'Week 1',
            leads: '32,030',
            call_count: '83,993',
            folder: true,
            children: [
                {labels: 'John Smith', leads:'6,665', call_count: '4,105'},
                {labels: 'Paul White', leads: '12,962', call_count: '55,518'},
                {labels: 'David Brown', leads: '12,403', call_count: '24,018'}
            ]},
          {
            folder: true,
            labels: 'Week 2',
            leads: '2,141',
            call_count: '133,130',
            children: [
              {labels: 'John Smith', leads:'424.00', call_count: '86,234'},
              {labels: 'Paul White', leads: '214.00', call_count: '90,778'},
              {labels: 'David Brown', leads: '244.00', call_count: '63,248'}
            ]
          },
          {
            folder: true,
            labels: 'Week 3',
            leads: '4,113',
            call_count: '12,341',
            children: [
              {labels: 'John Smith', leads:'449.00', call_count: '3,628'},
              {labels: 'Paul White', leads: '855', call_count: '7,325'},
              {labels: 'David Brown', leads: '798.00', call_count: '9,988'}
            ]
          },
          {
            folder: true,
            labels: 'Week 4',
            leads: '66,973',
            call_count: '8,974',
            children: [
              {labels: 'John Smith', leads:'2,697', call_count: '2,159'},
              {labels: 'Paul White', leads: '5,937', call_count: '150'},
              {labels: 'David Brown', leads: '7,342', call_count: '4,600'}
            ]
          }
        ]
      },
      {
        folder: true,
        open: true,
        labels: 'March',
        children: [
            {labels: 'Week 1',
            leads: '159,238',
            call_count: '115,974',
            folder: true,
            children: [
                {labels: 'John Smith', leads:'116,125', call_count: '18,184'},
                {labels: 'Paul White', leads: '10,966', call_count: '65,096'},
                {labels: 'David Brown', leads: '32,147', call_count: '32,694'}
            ]},
          {
            folder: true,
            labels: 'Week 2',
            leads: '882',
            call_count: '22,113',
            children: [
              {labels: 'John Smith', leads:'424.00', call_count: '86,234'},
              {labels: 'Paul White', leads: '214.00', call_count: '90,778'},
              {labels: 'David Brown', leads: '244.00', call_count: '63,248'}
            ]
          },
          {
            folder: true,
            labels: 'Week 3',
            leads: '2,102',
            call_count: '54,132',
            children: [
              {labels: 'John Smith', leads:'449.00', call_count: '3,628'},
              {labels: 'Paul White', leads: '855', call_count: '7,325'},
              {labels: 'David Brown', leads: '798.00', call_count: '9,988'}
            ]
          },
          {
            folder: true,
            labels: 'Week 4',
            leads: '15,976',
            call_count: '12,112',
            children: [
              {labels: 'John Smith', leads:'2,697', call_count: '2,159'},
              {labels: 'Paul White', leads: '5,937', call_count: '150'},
              {labels: 'David Brown', leads: '7,342', call_count: '4,600'}
            ]
          }
        ]
      },
      {
        folder: true,
        open: true,
        labels: 'April',
        children: [
            {labels: 'Week 1',
            leads: '7,547',
            call_count: '44,147',
            folder: true,
            children: [
                {labels: 'John Smith', leads:'1,033', call_count: '12,272'},
                {labels: 'Paul White', leads: '3,252', call_count: '17,428'},
                {labels: 'David Brown', leads: '3,262', call_count: '14,075'}
            ]},
          {
            folder: true,
            labels: 'Week 2',
            leads: '1,002',
            call_count: '11,341',
            children: [
              {labels: 'John Smith', leads:'424.00', call_count: '86,234'},
              {labels: 'Paul White', leads: '214.00', call_count: '90,778'},
              {labels: 'David Brown', leads: '244.00', call_count: '63,248'}
            ]
          },
          {
            folder: true,
            labels: 'Week 3',
            leads: '11,322',
            call_count: '21,998',
            children: [
              {labels: 'John Smith', leads:'449.00', call_count: '3,628'},
              {labels: 'Paul White', leads: '855', call_count: '7,325'},
              {labels: 'David Brown', leads: '798.00', call_count: '9,988'}
            ]
          },
          {
            folder: true,
            labels: 'Week 4',
            leads: '21,116',
            call_count: '2,352',
            children: [
              {labels: 'John Smith', leads:'2,697', call_count: '2,159'},
              {labels: 'Paul White', leads: '5,937', call_count: '150'},
              {labels: 'David Brown', leads: '7,342', call_count: '4,600'}
            ]
          }
        ]
      }
    ],
    rowSelection: 'multiple',
    enableColResize: true,
    enableSorting: true,
    rowHeight: 20,
    getNodeChildDetails: function(file) {
        if (file.folder) {
            return {
                group: true,
                children: file.children,
                expanded: file.open
            };
        } else {
            return null;
        }
    },
    icons: {
        groupExpanded: '<i class="fa fa-minus-square-o"/>',
        groupContracted: '<i class="fa fa-plus-square-o"/>'
    }
  }
});