var ContactApp= angular.module('contactApp', ['ngSanitize']);

ContactApp
.controller('ContactCtrl', ['$scope', function($scope){
	$scope.Contact = {};
	$scope.Contact.firstName = "f";
	$scope.Contact.lastName = "l";
	$scope.Contact.email = "e";
	$scope.Contact.subject = "s";
	$scope.Contact.message = "m";
	console.log('hello Contact');
}])