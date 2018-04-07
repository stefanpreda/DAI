import Ember from 'ember';

export default Ember.Route.extend({

  staticDoctors: [
    "DOCTOR1", "DOCTOR2", "DOCTOR3"
  ],

  beforeModel() {
    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
        return;
    }

    this.controllerFor("new-appointment").set("doctors", this.get('staticDoctors'));
    this.controllerFor("results").set("selectedDoctor", this.get('staticDoctors')[0]);
  }
});