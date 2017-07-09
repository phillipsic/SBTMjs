FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'blankpage' } ); 
  },
  name: 'blankpage'
});


FlowRouter.route( '/projects', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'projectsAdmin' } ); 
  },
  name: 'projectsAdmin'
});