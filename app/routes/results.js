import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  staticPatients: [
    "asd", "PATIENT2", "PATIENT3"
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
        let options = {
            method: 'GET',
            dataType: 'json',
            headers: {
              'Content-Type':'application/json'
            }
        };

        const url = 'http://localhost:8080/results/fetch?name=' + this.controllerFor("application").get('currentName');

        var self = this;

        this.get('ajax').request(url, options).then(function(result){
            var results = [];
            result.results.forEach(element => {
                var resultEntry = {};
                resultEntry.header = element.title;
                resultEntry.message = element.description;
                
                results.push(resultEntry);
            });
            self.controllerFor("results").set("resultEntries", results);
        },
        function(reason) {
            alert("Fetching results failed: " + reason.errors[0].detail.message);
        });
    }
  }
});