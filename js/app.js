angular.module('TodoApp', ['ngRoute', 'RouteControllers','UserService','angular-storage','TodoService','TodoDirective']);
 
angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
   .when('/accounts/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/todo', {
        templateUrl: 'templates/todo.html',
        controller: 'TodoController'
    })
    .when('/todo/edit/:id', {
	    templateUrl:'templates/edit-todo.html',
	    controller: 'EditTodoController'
	});
});