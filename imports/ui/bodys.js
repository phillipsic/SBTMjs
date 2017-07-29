import { Template } from 'meteor/templating'; 
  
import './body.html'; 
import './projectadmin_template.html';
import './useradmin_template.html';
import './mysessions_template.html';
import './dashboard_template.html';
import './login_template.html';
// import { users } from '../api/users.js';

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
       // var role = $('[name=role]').val();
        
        var role =$("input[name='role']:checked").val()
        
      
        
        console.log("Role from browser")
        console.log(role)
        
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
        console.log(Meteor.userId())
        
// if (role > 0) {
// if (role = 'admin'){
//
// Roles.addUsersToRoles(id, user.roles, 'admin');
//                
// }else{
        var roles = ['admin', 'roleName']; 
       // Roles.addUsersToRoles(id, roles);
	
        	Roles.addUsersToRoles(Meteor.userId(), role, 'default-group');
        // }}
        
    }
});
