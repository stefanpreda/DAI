import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  
  beforeModel() {
    this.controllerFor("my-appointments").set("appointments", []);

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

    let url = 'http://localhost:8080/appointments/fetch?name=' + this.controllerFor("application").get('currentName');
    var self = this;

    this.get('ajax').request(url, options).then(function(result){
        var appointments = [];
        result.appointments.forEach(element => {
            var appointmentsEntry = {};
            appointmentsEntry.title = element.title;
            appointmentsEntry.content = element.description;
            
            appointments.push(appointmentsEntry);
        });
        self.controllerFor("my-appointments").set("appointments", appointments);
    },
    function(reason) {
        alert("Fetching appointments failed: " + reason.errors[0].detail.message);
    });
  },
});
