import Ember from 'ember';

export default Ember.ArrayController.extend({

  addButtonNeeded: false,
  appointments: [],

  actions:{
    addButton: function(){
      this.transitionToRoute('new-appointment');
    } 
  }
});

