import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({

	  'users.insert'(email, password, role) {

	    check(email, String);
	    check(password, String);
	    check(role, String);

	 

	    // Make sure the user is logged in before inserting a task

	    if (! Meteor.userId()) {

	      throw new Meteor.Error('not-authorized');

	    }
	    if (role == 'admin'){
        	
        	rolename= "Admin User";
        	
        }else{
        	rolename="Normal User";
        }
        
        
        console.log("Rolename from code")
        console.log(rolename)

	       var userid = Accounts.createUser({
	            email: email,
	            username: email,
	            password: password,
	            profile: { name: rolename }
	        });
	        
	        console.log("Users ID")
	        console.log(userid)
	        

		
	        	Roles.addUsersToRoles(userid, role, 'default-group');

	  },

	  'users.remove'(taskId) {

	    check(taskId, String);

	 

	    Tasks.remove(taskId);

	  },



	});