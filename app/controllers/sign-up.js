import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'sign-in',
  ajax: Ember.inject.service(),

  name: null,
  username: null,
  password: null,
  rePassword: null,
  roles: ["patient", "doctor"],
  selectedRole: "patient",

  options: {
    url: 'http://localhost:8080/users/register',
    method: 'POST',
    dataType: 'json',
    headers: {
      'Content-Type':'application/json'
    },
    data: ''
  },

  actions:{
    submit: function(){

      if (this.get('name') === null || this.get('username') === null || this.get('password') === null || this.get('rePassword') === null) {
        alert("Please fill all fields!");
        return;
      }
      
      if (this.get('password') !== this.get('rePassword')) {
        alert("Passwords do not match!");
        return;
      }

      const url = this.get('options').url;
      delete this.get('options').url; 

      let options = this.get('options');
      options.data = JSON.stringify({
        userName: this.get('username'),
        password: this.get('password'),
        role: this.get('selectedRole'),
        name: this.get('name')
      });

      var self = this;
      this.get('ajax').request(url, options).then(function(){
        alert("Sign-up successful");

        self.set('name', null);
        self.set('selectedRole', "patient");
        self.set('username', null);
        self.set('password', null);
        self.set('rePassword', null);

        self.transitionToRoute('sign-in');
      },
      function(reason){
        alert("Sign-up failed: " + reason.errors[0].detail.message);
        self.set('name', null);
        self.set('selectedRole', "patient");
        self.set('username', null);
        self.set('password', null);
        self.set('rePassword', null);
      });
    },

    setRole: function(role) {
        this.set('selectedRole', role);
    } 
  }
});
