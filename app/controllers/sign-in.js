import Ember from 'ember';

export default Ember.Controller.extend({

  credentials: [{
    username: "patient",
    password: "patient"
  },
  {
    username: "doctor",
    password: "doctor"
  }],

  actions:{
    submit: function(username) {
    //   let username = document.querySelector('#Username').value;
      alert(username);
    } 
  }
});
