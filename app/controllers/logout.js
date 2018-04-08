import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  actions:{
    logout: function() {
        
        this.set('controllers.application.authSuccessful', false);
        this.set('controllers.application.isPatient', true);
        this.set('controllers.application.currentUsername', null);
        this.set('controllers.application.currentName', null);
        this.set('controllers.application.currentRole', null);
        sessionStorage.setItem('authSuccessful', false);
        sessionStorage.setItem('isPatient', true);
        sessionStorage.setItem('currentUsername', null);
        sessionStorage.setItem('currentName', null);
        sessionStorage.setItem('currentRole', null);

        this.transitionToRoute('sign-in');
    } 
  }
});
