import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application', 'sign-in'],

  actions:{
    logout: function() {

        //#TODO POST TO BACKEND
        this.set('controllers.sign-in.username', null);
        this.set('controllers.sign-in.password', null);
        
        this.set('controllers.application.authSuccessful', false);
        this.set('controllers.application.currentUsername', null);
        this.set('controllers.application.currentRole', null);

        this.transitionToRoute('sign-in');
    } 
  }
});
