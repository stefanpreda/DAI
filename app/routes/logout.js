import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
    }
  },
  model: function(){
    return [];
  }
});
