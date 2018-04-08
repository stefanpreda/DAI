import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  name: null,
  title: null,
  description: null,
  date: null,
  time: null,
  doctors: [],
  selectedDoctor: null,

  options: {
    url: 'http://localhost:8080/appointments/create',
    method: 'POST',
    dataType: 'json',
    headers: {
      'Content-Type':'application/json'
    },
    data: ''
  },

  actions:{
    submit: function() {

        if (this.get('title') === null || this.get('description') === null || this.get('selectedDoctor') === null) {
            alert("Please fill all fields!");
            return;
          }

          const url = this.get('options').url;
          delete this.get('options').url; 

          let options = this.get('options');
          options.data = JSON.stringify({
            patient: this.get('name'),
            doctor: this.get('selectedDoctor'),
            title: this.get('title'),
            description: this.get('description'),
            date: this.get('date'),
            time: this.get('time')
          });

          var self = this;
          this.get('ajax').request(url, options).then(function(){
            alert("Submitted successfully");
            self.set('name', null);
            self.set('title', null);
            self.set('description', null);
            self.set('date', null);
            self.set('time', null);
            self.set('selectedDoctor', this.get('doctors')[0]);
            self.transitionToRoute('appointments');
          },
          function(reason){
            alert("Submit failed: " + reason.errors[0].detail.message);
            self.set('name', null);
            self.set('title', null);
            self.set('description', null);
            self.set('date', null);
            self.set('time', null);
            self.set('selectedDoctor', this.get('doctors')[0]);
          });

    },
    setDoctor: function(doctor) {
        this.set('selectedDoctor', doctor);
    }
  }
});
