import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  staticSpecializations: [{
      title: 'Cardiology',
      content: 'The branch of medicine dealing with disorders of the heart as well as parts of the circulatory system.'
    },
    {
      title: 'Psychiatry',
      content: 'The medical specialty devoted to the diagnosis, prevention, study, and treatment of mental disorders'
    },
    {
      title: 'Dermatology',
      content: 'The branch of medicine dealing with the skin, nails, hair and its diseases.'
    },
    {
      title: 'Gastroenterology',
      content: 'The branch of medicine focused on the digestive system and its disorders.'
    },
    {
      title: 'General Practice',
      content: 'Routine health care (e.g., physical examinations, immunizations) and assess and treat many different conditions.'
    },
    {
      title: 'Neurology',
      content: 'The branch of medicine dealing with disorders of the nervous system.'
    },
    {
      title: 'Ophthalmology',
      content: 'The branch of medicine that deals with the anatomy, physiology and diseases of the eyeball and orbit.'
    },
    {
      title: 'Pediatrics',
      content: 'The branch of medicine that involves the medical care of infants, children, and adolescents.'
    },
    {
      title: 'Radiology',
      content: 'The science that uses medical imaging to diagnose and sometimes also treat diseases within the body.'
    }],
  
  beforeModel() {
    this.controllerFor("appointments").set("specializationsOrAppointments", []);
    this.controllerFor("appointments").set("addButtonNeeded", false);

    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
        return;
    }

    if (this.controllerFor("application").get("currentRole") === "doctor") {
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
              appointmentsEntry.patient = element.patient;
              appointmentsEntry.date = element.date;
              appointmentsEntry.time = element.time;
              
              appointments.push(appointmentsEntry);
          });
          self.controllerFor("appointments").set("specializationsOrAppointments", appointments);
      },
      function(reason) {
          alert("Fetching appointments failed: " + reason.errors[0].detail.message);
      });
    }
    else {
        this.controllerFor("appointments").set("addButtonNeeded", true);
        this.controllerFor("appointments").set("specializationsOrAppointments", this.get('staticSpecializations'));
    }
  },
});
