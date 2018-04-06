import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
     // this redirects / to /sign-in
     this.transitionTo('sign-in');
  }
});
