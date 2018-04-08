import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  ajax: Ember.inject.service(),

  options: {
    url: 'http://localhost:8080/users/validate',
    method: 'POST',
    dataType: 'json',
    headers: {
      'Content-Type':'application/json'
    },
    data: ''
  },
  
  username: null,
  password: null,

  actions:{
    submit: function() {

      const url = this.get('options').url;
      delete this.get('options').url; 

      let options = this.get('options');
      options.data = JSON.stringify({
        userName: this.get('username'),
        password: this.get('password'),
      });

      this.set('username', null);
      this.set('password', null);

      var self = this;
      this.get('ajax').request(url, options).then(function(result){
        self.set('controllers.application.authSuccessful', true);
        self.set('controllers.application.currentUsername', result.user.userName);
        self.set('controllers.application.currentName', result.user.name);
        self.set('controllers.application.currentRole', result.user.role);
        sessionStorage.setItem('authSuccessful', true);
        sessionStorage.setItem('currentUsername', result.user.userName);
        sessionStorage.setItem('currentRole', result.user.role);

        self.transitionToRoute('appointments');
      },
      function(){
        alert("Invalid username and/or password");
      });
    } 
  }
});
