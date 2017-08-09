import { Template } from 'meteor/templating'; 
import './body.html'; 
import './projectadmin_template.html';
import './useradmin_template.html';
import './mysessions_template.html';
import './dashboard_template.html';
import './login_template.html';


BlazeLayout.setRoot('#test');

Template.usersAdmin.helpers({ 
	  listusers() {

		  console.log(Meteor.users.find({}))
		    return Meteor.users.find({});

		  },
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
    }
});

Template.adminmenubar.events({
    'click  .glyphicon-log-out': function(event){
    	console.log("Initiated the logout process")
        event.preventDefault();
        Meteor.logout();
    }
});

Template.adminmenubar.events({
    'click  .logout': function(event){
    	console.log("Initiated the logout process")
        event.preventDefault();
        Meteor.logout();
    }
});



Template.usersAdmin.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var role = $("input[name='role']:checked").val();
        
      
        

        
       
        	console.log("Inserting User");
        	Meteor.call('createPlayer');
        Meteor.call('adduser');
//        Meteor.call('adduser', email, password, role);
//       var userid = Accounts.createUser({
//            email: email,
//            username: email,
//            password: password,
//            profile: { name: rolename }
//        });
//        
//        console.log("Users ID")
//        console.log(Meteor.userId())
//        
//
//	
//        	Roles.addUsersToRoles(Meteor.userId(), role, 'default-group');

        
    }
});
