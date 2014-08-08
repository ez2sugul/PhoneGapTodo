var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', function ($scope) {
	$scope.todoList = [
	{done : true, title : 'AngularJS 독서'},
	{done : false, title : 'AngularJS 포기하기'}, 
	{done : false, title : '개인 프로젝트 구성'}
	];
});