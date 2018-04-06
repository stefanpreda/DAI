import Ember from 'ember';

export default Ember.Route.extend({
    
  beforeModel() {
    //#TODO HTTP GET FROM BACKEND (this.controllerFor("application").set("authSuccessful", true))
    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
    }
  },

  model: function(){
    //#TODO HTTP GET AND RETURN THE JSON
    return [
        {
            header: "First result header",
            message: "first result message"
        },
        {
            header: "Second result header",
            message: "second result message"
        },
        {
            header: "Third result header",
            message: "third result message"
        }
    ];
  }
});