Template.todoApp.onRendered(function() {
	setInterval(function() {
		$('.current-time').text(moment().format('MMMM, Do, YYYY, h:mm:ss a'));
	}, 1000);

	$('body').on('keyup', function(event) {
		if (event.which === 78) {
			if ($('.popup-form').not('.form-opened')) {
				$('.popup-form').css('display', 'block').addClass('form-opened');
				$('.popup-form input').focus();
			}			
		}
	});

	$('body').on('keyup', function(event) {
		if (event.which === 27) {
			if ($('.popup-form').has('.form-opened')) {
				$('input[name="task"]').val('');
				$('.popup-form').css('display', 'none').removeClass('form-opened');
			}
		}
	});

});

Template.todoApp.helpers({
	tasks: function() {
		return Tasks.find();
	}
});

Template.todoApp.events({
	'click .call-form': function(event) {
		$('.popup-form').css('display', 'block').addClass('form-opened');
		$('.popup-form input').focus();
	},

	'click .close-popup-form': function(event) {
		$('input[name="task"]').val('');
		$('.popup-form').css('display', 'none').removeClass('form-opened');
	},

	'click .priority-task': function(event) {
		var checked = !Tasks.findOne(this._id).priority;
		Meteor.call('updateTaskPriority', this._id, checked);
	},

	'click .complete-task': function(event) {
		var checked = !Tasks.findOne(this._id).completed;
		Meteor.call('updateTaskComplete', this._id, checked);
	},

	'submit .new-task-form': function(event) {
		var taskValue = event.target.task.value;
		Meteor.call('insertTask', taskValue);
		event.target.task.value = '';
		$('.popup-form').css('display', 'none').removeClass('form-opened');
		return false;
	},

	'click .delete-task': function() {
		Meteor.call('deleteTask', this._id);
	}


});