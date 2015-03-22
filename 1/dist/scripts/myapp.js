var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('CarouselCtrl', function ($scope) {
	var slides = $scope.slides = [{image:"/images/SisterswStaciMonica.jpg"},
								  {image:"/images/Truvee+Old+Vine+Grenache.jpg"},
								  {image:"/images/A001_C017_1204XZ.0000549.jpeg"},
								  {image:"/images/16706540385_75fa074e59_o.jpg"},
								  {image:"/images/truvee+chardonnay.jpg"}];

});