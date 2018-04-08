import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  beforeModel() {
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
    let url = 'http://localhost:8080/users/names?role=doctor';

    this.get('ajax').request(url, options).then(function(result){
      self.controllerFor("new-appointment").set("doctors", result.names);
      self.controllerFor("new-appointment").set("selectedDoctor", result.names[0]);
    },
    function(reason) {
        alert("Fetching doctors failed: " + reason.errors[0].detail.message);
    });
  }
});