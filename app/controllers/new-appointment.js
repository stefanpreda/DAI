import Ember from 'ember';

export default Ember.Controller.extend({
  
  name: null,
  title: null,
  description: null,
  date: null,
  time: null,
  doctors: [],
  selectedDoctor: null,

  actions:{
    submit: function() {

        if (this.get('title') === null || this.get('description') === null || this.get('selectedDoctor') === null) {
            alert("Please fill all fields!");
            return;
          }

          //#TODO POST TO BACKEND
    
          this.set('name', null);
          this.set('title', null);
          this.set('description', null);
          this.set('date', null);
          this.set('time', null);
          this.set('selectedDoctor', this.get('doctors')[0]);
    
          alert("Submitted successfully");
          this.transitionToRoute('appointments');
    },
    setDoctor: function(doctor) {
        this.set('selectedDoctor', doctor);
    }
  }
});
