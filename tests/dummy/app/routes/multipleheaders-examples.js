import Ember from "ember";
const {
  Route,
  RSVP
} = Ember;

export default Route.extend({

  model() {
    const promises = {
      departments: Ember.$.getJSON('/departments'),
      materials: Ember.$.getJSON('/materials')
    };
    return RSVP.hash(promises);
  }



});