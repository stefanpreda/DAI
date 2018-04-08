import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    //#TODO HTTP GET FROM BACKEND (this.controllerFor("application").set("authSuccessful", true))
    if (this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('appointments');
    }
    var authSuccessful = (localStorage.authSuccessful === 'true');
    var currentUsername = localStorage.currentUsername;
    var currentName = localStorage.currentName;
    var currentRole = localStorage.currentRole;

    if (authSuccessful) {
      this.controllerFor("application").set("authSuccessful", authSuccessful);
      this.controllerFor("application").set("currentUsername", currentUsername);
      this.controllerFor("application").set("currentName", currentName);
      this.controllerFor("application").set("currentRole", currentRole);
      this.transitionTo('appointments');
    }
  },
  model: function(){
    return [];
  }
});
