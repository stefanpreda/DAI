import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  authSuccessful: false,
  
  isAppointmentsActive: function() {
    if (this.get('controllers.application.currentPath') === 'appointments'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),

  isResultsActive: function() {
    if (this.get('controllers.application.currentPath') === 'results'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),

  isSignUpActive: function() {
    if (this.get('controllers.application.currentPath') === 'sign-up'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),

  isSignInActive: function() {
    if (this.get('controllers.application.currentPath') === 'sign-in'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),
});
