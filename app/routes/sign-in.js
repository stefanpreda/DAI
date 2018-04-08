import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if (this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('appointments');
    }
    var authSuccessful = (sessionStorage.authSuccessful === 'true');
    var isPatient = (sessionStorage.isPatient === 'true');
    var currentUsername = sessionStorage.currentUsername;
    var currentName = sessionStorage.currentName;
    var currentRole = sessionStorage.currentRole;

    if (authSuccessful) {
      this.controllerFor("application").set("authSuccessful", authSuccessful);
      this.controllerFor("application").set("currentUsername", currentUsername);
      this.controllerFor("application").set("currentName", currentName);
      this.controllerFor("application").set("currentRole", currentRole);
      this.controllerFor("application").set("isPatient", isPatient);
      this.transitionTo('appointments');
    }
  },
  model: function(){
    return [];
  }
});
