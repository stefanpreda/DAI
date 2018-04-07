import Ember from 'ember';

export default Ember.Controller.extend({
  
  displayForm: false,
  title: null,
  description: null,
  patients: [],
  resultEntries: null,
  selectedPatient: null,

  actions:{
    submit: function() {

        if (this.get('title') === null || this.get('description') === null || this.get('selectedPatient') === null) {
            alert("Please fill all fields!");
            return;
          }

          //#TODO POST TO BACKEND
    
          this.set('title', null);
          this.set('description', null);
          this.set('selectedPatient', this.get('patients')[0]);
    
          alert("Saved successfully");
    },
    setPatient: function(patient) {
        this.set('selectedPatient', patient);
    }
  }
});
