import { Template } from 'meteor/templating'; 
  
import './body.html'; 
import './projectadmin_template.html';
import './useradmin_template.html';
import './mysessions_template.html';
//import { users } from '../api/users.js';

BlazeLayout.setRoot('#test');

Template.usersAdmin.helpers({ 
	  listusers() {

		  console.log(Meteor.users.find({}))
		    return Meteor.users.find({});

		  },
});