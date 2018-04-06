import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    //#TODO HTTP GET FROM BACKEND (this.controllerFor("application").set("authSuccessful", true))
    if (this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('appointments');
    }
  },
  model: function(){
    return [];
  }
});
