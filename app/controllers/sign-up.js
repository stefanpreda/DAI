import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'sign-in',

  name: null,
  username: null,
  password: null,
  rePassword: null,
  roles: ["patient", "doctor"],
  selectedRole: "patient",

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

      //#TODO POST TO BACKEND

      this.set('name', null);
      this.set('selectedRole', "patient");
      this.set('username', null);
      this.set('password', null);
      this.set('rePassword', null);

      this.transitionToRoute('sign-in');
      alert("Sign-up successful");
    },

    setRole: function(role) {
        this.set('selectedRole', role);
    } 
  }
});
