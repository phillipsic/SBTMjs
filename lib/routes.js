FlowRouter.route( '/projects', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'projectsAdmin' } ); 
  },
  name: 'projectsAdmin'
});