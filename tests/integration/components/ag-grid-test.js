import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { gridOptions } from '../constants';


moduleForComponent('ag-grid', 'Integration | Component | agGrid', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  this.gridOptions = gridOptions;

  this.render(hbs`
    {{ag-grid gridOptions=gridOptions }}
  `);

  assert.equal(this.$('.agGrid').length, 1, 'did not render');
});


test('sets theme as className', function(assert) {
  assert.expect(1);
  this.gridOptions = gridOptions;

  this.render(hbs`
    {{ag-grid gridOptions=gridOptions theme="newTheme" }}
  `);

  assert.equal(this.$('.agGrid').hasClass('newTheme'), true, 'does not set theme as className');
});


test('it renders with width parameter', function(assert) {
  assert.expect(1);
  this.gridOptions = gridOptions;

  this.render(hbs`
    {{ag-grid gridOptions=gridOptions width="120px" }}
  `);

  assert.equal(this.$('.agGrid').css('width'), "120px", 'computed width style does not match');
});

test('it renders with height parameter', function(assert) {
  assert.expect(1);
  this.gridOptions = gridOptions;

  this.render(hbs`
    {{ag-grid gridOptions=gridOptions height="50px" }}
  `);

  assert.equal(this.$('.agGrid').css('height'), "50px", 'computed height style does not match');
});

// test('throws error when passing invalid css as width', function(assert) {
//   assert.expect(1);
//   this.gridOptions = gridOptions;

//   assert.throws(() => {
//     this.render(hbs`{{ag-grid gridOptions=gridOptions width="background-color:blue" }} `);
//   },
//     new Error('Assertion Failed: invalid width property; use auto, px, % or em'), 'Expect an error with invalid width message');

// });

// test('throws error when passing invalid css as height', function(assert) {
//   assert.expect(1);
//   this.gridOptions = gridOptions;

//   assert.throws(() => {
//     this.render(hbs`{{ag-grid gridOptions=gridOptions height="background-color:blue" }} `);
//   },
//     new Error('Assertion Failed: invalid height property; use auto, px, % or em'), 'Expect an error with invalid height message');

// });

test('it renders without gridOptions', function(assert) {
  assert.expect(1);
  
  this.render(hbs`
    {{ag-grid}}
  `);

  assert.equal(this.$('.agGrid').length, 1, 'did not render');
});