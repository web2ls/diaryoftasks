/*Router.configure({
	layoutTemplate: 'layout'
});*/

Router.route('/', function () {
  this.render('layout');
});
 
Router.route('/todoApp', function () {
  this.render('todoApp');
});


/*Router.map(function() {
	this.route('layout', {path: '/'});

	this.route('todoApp', {path: '/todoApp'});
});*/

//Router.route('/views/todoApp');