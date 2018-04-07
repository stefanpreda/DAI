import Ember from 'ember';

export default Ember.Route.extend({

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
  
  staticAppointments: [
    {
      title: 'Appointment1',
      content: 'Some information about appointment'
    },
    {
      title: 'Appointment2',
      content: 'Some information about appointment'
    },
    {
      title: 'Appointment3',
      content: 'Some information about appointment'
    }
  ],
  
  beforeModel() {
    this.controllerFor("appointments").set("specializationsOrAppointments", []);
    this.controllerFor("appointments").set("addButtonNeeded", false);

    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
        return;
    }

    if (this.controllerFor("application").get("currentRole") === "doctor") {
        //#TODO GET APPOINTMENTS FROM BACKEND
        this.controllerFor("appointments").set("specializationsOrAppointments", this.get('staticAppointments'));
      }
    else {
        this.controllerFor("appointments").set("addButtonNeeded", true);
        this.controllerFor("appointments").set("specializationsOrAppointments", this.get('staticSpecializations'));
    }
  },
});
