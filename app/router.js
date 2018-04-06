import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.route('appointments');
  this.route('results');
  this.route('sign-up');
  this.route('sign-in');
});
