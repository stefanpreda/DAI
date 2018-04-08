import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  options: {
    url: 'http://localhost:8080/results/create',
    method: 'POST',
    dataType: 'json',
    headers: {
      'Content-Type':'application/json'
    },
    data: ''
  },

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

        const url = this.get('options').url;
        delete this.get('options').url; 

        let options = this.get('options');
        options.data = JSON.stringify({
          name: this.get('selectedPatient'),
          title: this.get('title'),
          description: this.get('description')
        });

        this.set('title', null);
        this.set('description', null);
        this.set('selectedPatient', this.get('patients')[0]);

        this.get('ajax').request(url, options).then(function(){
          alert("Saved successfully");
        },
        function(reason){
          alert("Sign-up failed: " + reason.errors[0].detail.message);
        });
  

    },
    setPatient: function(patient) {
        this.set('selectedPatient', patient);
    }
  }
});
