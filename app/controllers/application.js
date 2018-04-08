import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',

  authSuccessful: false,
  currentUsername: null,
  currentName: null,
  currentRole: null,
  
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

  isLogoutActive: function() {
    if (this.get('controllers.application.currentPath') === 'logout'){
      return 'active';
    }
  }.property('controllers.application.currentPath')
});
