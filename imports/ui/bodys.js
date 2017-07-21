import { Template } from 'meteor/templating'; 
  
import './body.html'; 
import './projectadmin_template.html';
import './useradmin_template.html';
import './mysessions_template.html';
  


BlazeLayout.setRoot('#test');

Template.body.helpers({ 
  tasks: [ 
    { text: 'This is task 1' }, 
    { text: 'This is task 2' }, 
    { text: 'This is task 3' }, 
  ], 
});