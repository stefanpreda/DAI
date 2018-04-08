import Ember from 'ember';

export default Ember.Route.extend({
  
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
    this.controllerFor("my-appointments").set("appointments", []);

    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
        return;
    }

    //#TODO GET APPOINTMENTS FROM BACKEND
    this.controllerFor("my-appointments").set("appointments", this.get('staticAppointments'));
  },
});
