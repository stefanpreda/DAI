import Ember from 'ember';

export default Ember.Route.extend({
    
  beforeModel() {
    if (!this.controllerFor("application").get("authSuccessful")) {
        this.transitionTo('sign-in');
    }
  },

  model: function(){
    //#TODO HTTP GET AND RETURN THE JSON

    if (this.controllerFor("application").get("currentRole") === "patient") {
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
    else {
        return [];
    }
  }
});