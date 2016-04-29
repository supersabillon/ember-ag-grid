import Ember from 'ember';

const {
  Component,
  computed,
  run,
  String,
  assert
} = Ember;

export default Component.extend({

  classNames: ['ag-grid-container'],
  tagName: 'div',
  theme: 'ag-fresh',
  width: '100%',
  height: '100%',
  gridOptions: undefined,

  containerStyle: computed('width', 'height', function () {
    let width = this.get('width');
    let height = this.get('height');

    assert('invalid width property; use auto, px, % or em',
      this._escapeCSS(width)
    );

    assert('invalid height property; use auto, px, % or em',
      this._escapeCSS(height)
    );

    return String.htmlSafe(`width: ${width}; height: ${height};`);
  }),

  _escapeCSS(css) {
    return /(^auto$|^\d*px$|^\d*%$|^\d*em$)/.test(css);
  },

  didInsertElement() {
    this._super(...arguments);
    
    let defaults = {columnDefs: [], rowData: []};
    
    if (!this.get('gridOptions')) {
      this.set('gridOptions', defaults);
    }

    run.scheduleOnce('afterRender', () => {
      new agGrid.Grid(this.$('.agGrid')[0], this.get('gridOptions'));
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('gridOptions').api.destroy();
  }

});
