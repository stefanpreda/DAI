import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  credentials: [{
    username: "patient",
    password: "patient"
  },
  {
    username: "doctor",
    password: "doctor"
  }],

  username: null,
  password: null,

  actions:{
    submit: function() {

    //#TODO GET CREDENTIALS FROM DATABASE
    //#TODO ALERT ON FAIL
      this.get('credentials').forEach(element => {
          if (this.get('username') === element.username && this.get('password') === element.password) {
              this.set('controllers.application.authSuccessful', true);
              this.transitionToRoute('appointments');
          }
      });
    } 
  }
});
