Meteor.methods({
	insertTask: function(taskValue) {
		check(taskValue, String);
		check(Meteor.userId(), String);
		Tasks.insert({
			task: taskValue,
			createdAt: new Date(),
			userId: Meteor.userId(),
			priority: false,
			completed: false
		});
	},

	updateTaskPriority: function(id, checked) {
		check(id, String);
		check(checked, Boolean);
		Tasks.update(id, {$set: {priority: checked}});
	},

	updateTaskComplete: function(id, checked) {
		check(id, String);
		check(checked, Boolean);
		Tasks.update(id, {$set: {completed: checked}});
	},

	deleteTask: function(id) {
		check(id, String);
		Tasks.remove(id);
	}

});