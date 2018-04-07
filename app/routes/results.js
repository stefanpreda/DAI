import Ember from 'ember';

export default Ember.Route.extend({

  staticResults: [
    {
        header: "First result header",
        message: "first result message"
    },
    {
        header: "Second result header",
        message: "second result message"
    },
    {
        header: "Third result header",
        message: "third result message"
    }
  ],
  staticPatients: [
    "PATIENT1", "PATIENT2", "PATIENT3"
  ],

  beforeModel() {
    this.controllerFor("results").set("resultEntries", []);
    this.controllerFor("results").set("displayForm", false);

    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
        return;
    }

    if (this.controllerFor("application").get("currentRole") === "doctor") {
        //#TODO GET PATIENTS FROM BACKEND
        this.controllerFor("results").set("displayForm", true);
        this.controllerFor("results").set("patients", this.get('staticPatients'));
        this.controllerFor("results").set("selectedPatient", this.get('staticPatients')[0]);
    }
    else {
        //#TODO GET THEM FROM BACKEND
        this.controllerFor("results").set("resultEntries", this.get('staticResults'));
    }
  }
});