import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  beforeModel() {
    this.controllerFor("results").set("resultEntries", []);
    this.controllerFor("results").set("displayForm", false);

    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
        return;
    }

    let options = {
        method: 'GET',
        dataType: 'json',
        headers: {
          'Content-Type':'application/json'
        }
    };

    var self = this;

    if (this.controllerFor("application").get("currentRole") === "doctor") {

        let url = 'http://localhost:8080/users/names?role=patient';

        this.get('ajax').request(url, options).then(function(result){
            self.controllerFor("results").set("displayForm", true);
            self.controllerFor("results").set("patients", result.names);
            self.controllerFor("results").set("selectedPatient", result.names[0]);
        },
        function(reason) {
            alert("Fetching patients failed: " + reason.errors[0].detail.message);
        });
    }
    else {        
        let options = {
            method: 'GET',
            dataType: 'json',
            headers: {
              'Content-Type':'application/json'
            }
        };

        let url = 'http://localhost:8080/results/fetch?name=' + this.controllerFor("application").get('currentName');

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