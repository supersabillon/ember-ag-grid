import Ember from 'ember';
import config from 'ember-get-config';

const {
  Component,
  computed,
  run,
  assert
} = Ember;

export default Component.extend({

  classNames: ['ag-grid-container'],
  tagName: 'div',
  theme: 'ag-fresh',
  width: '100%',
  height: '400px',
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

    return Ember.String.htmlSafe(`width: ${width}; height: ${height};`);
  }),

  _escapeCSS(css) {
    return /(^auto$|^\d*px$|^\d*%$|^\d*em$)/.test(css);
  },

  didInsertElement() {
    this._super(...arguments);

    let defaults = {columnDefs: [], rowData: []};
    const agGridOptions = typeof config !== "undefined" ? config.agGrid : false;
    
    if (!this.get('gridOptions')) {
      this.set('gridOptions', defaults);
    }

    run.scheduleOnce('afterRender', () => {
      if (agGridOptions && agGridOptions.useEnterprise && agGridOptions.licenseKey) {
        agGrid.LicenseManager.setLicenseKey(agGridOptions.licenseKey);
      }

      new agGrid.Grid(this.$('.agGrid')[0], this.get('gridOptions'));

    });
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.get('gridOptions') && this.get('gridOptions').api) {
      this.get('gridOptions').api.destroy();
    }
  }

});
