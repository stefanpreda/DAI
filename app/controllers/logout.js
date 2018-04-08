import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  actions:{
    logout: function() {

        //#TODO POST TO BACKEND
        
        this.set('controllers.application.authSuccessful', false);
        this.set('controllers.application.currentUsername', null);
        this.set('controllers.application.currentRole', null);
        localStorage.setItem('authSuccessful', false);
        localStorage.setItem('currentUsername', null);
        localStorage.setItem('currentRole', null);

        this.transitionToRoute('sign-in');
    } 
  }
});
