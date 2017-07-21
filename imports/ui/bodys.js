import { Template } from 'meteor/templating'; 
  
import './body.html'; 
import './projectadmin_template.html';
import './useradmin_template.html';
import './mysessions_template.html';
  
//import { Users } from '../api/users.js';

BlazeLayout.setRoot('#test');

Template.usersAdmin.helpers({ 
  users: [ 
    { text: 'user1' }, 
    { text: 'user2' }, 
    { text: 'user3' }, 
  ], 
});