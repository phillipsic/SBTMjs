import { Template } from 'meteor/templating'; 
  
import './body.html'; 
import './projectadmin_template.html';
import './useradmin_template.html';
import './mysessions_template.html';
import './dashboard_template.html';
//import { users } from '../api/users.js';

BlazeLayout.setRoot('#test');

Template.usersAdmin.helpers({ 
	  listusers() {

		  console.log(Meteor.users.find({}))
		    return Meteor.users.find({});

		  },
});


Template.usersAdmin.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
});
