import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  credentials: [{
    username: "patient",
    password: "patient",
    role: "patient"
  },
  {
    username: "doctor",
    password: "doctor",
    role: "doctor"
  }],
  
  username: null,
  password: null,

  actions:{
    submit: function() {

      let found = false;

    //#TODO POST TO BACKEND INSTEAD
      this.get('credentials').forEach(element => {
          if (this.get('username') === element.username && this.get('password') === element.password) {
              this.set('controllers.application.authSuccessful', true);
              this.set('controllers.application.currentUsername', element.username);
              this.set('controllers.application.currentRole', element.role);

              found = true;
              this.transitionToRoute('appointments');
          }
      });

      if (!found) {
        alert("Invalid username and/or password");
      }
    } 
  }
});
