$(document).ready(function() {
	$('time').attr('datetime', '2016')

});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('tasks');

