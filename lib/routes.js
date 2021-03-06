FlowRouter.route('/', {
	action : function() {
		BlazeLayout.render('applicationLayout', {
			main : 'dashboard'
		});
	},
	name : 'dashboard'
});

FlowRouter.route('/projects', {
	action : function() {
		BlazeLayout.render('applicationLayout', {
			main : 'projectsAdmin'
		});
	},
	name : 'projectsAdmin'
});

FlowRouter.route('/mysessions', {
	action : function() {
		BlazeLayout.render('applicationLayout', {
			main : 'mysessions'
		});
	},
	name : 'mysessions'
});

FlowRouter.route('/usersAdmin', {
	action : function() {
		BlazeLayout.render('applicationLayout', {
			main : 'usersAdmin'
		});
	},
	name : 'usersAdmin'
});

FlowRouter.route('/dashboard', {
	action : function() {
		BlazeLayout.render('applicationLayout', {
			main : 'dashboard'
		});
	},
	name : 'dashboard'
});