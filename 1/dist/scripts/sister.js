/*
var Truvee = angular.module( "Truvee", ['ui-bootstrap'] )

Truvee
.controller("power", ['$scope', function( $scope){
	$scope.name = 'pwoer';
}])
*/
/*
var myapp = angular.module('myModule', ['ui.bootstrap']);

myapp.controller( 'myctrl',  ['$scope', '$window', function($scope, $window){
	console.log("no!!!");
	$scope.height = $window.innerHeight;
	$scope.width = $window.innerWidth;
}]);
*/

var truveeApp = angular.module('truveeApp', ['ui.bootstrap', 'ngSanitize']);

truveeApp
.controller( 'mainPage', ['$scope', '$window',function($scope, $window){
	$scope.name = 'main'
	$scope.Main = {}
	$scope.Main.pageHeight = $window.innerHeight;
	$scope.Main.pageWidth = $window.innerWidth;

	$scope.mainStyleHeight = "{'height':'" + $scope.Main.pageHeight.toString() + "px'}";
	$scope.mainStyleWidth = "{'height':'" + $scope.Main.pageWidth.toString() + "px'}";
} ])
.controller( 'mcbrideCtrl', ['$scope','$sce', function($scope,$sce){

	$scope.mcbride = {}
	$scope.mcbride.iframeContent = '<iframe mozallowfullscreen="" allowfullscreen="" src="https://player.vimeo.com/video/121415789?wmode=opaque&amp;api=1" width="' + $scope.Main.pageWidth.toString() + '" webkitallowfullscreen="" frameborder="0" title="&quot; To Find&quot; The Story of The McBride Sisters &amp; Truvée Wines" height="' + $scope.Main.pageHeight.toString() +'"></iframe>';
	$scope.mcbride.iframeDisplay = "";
	$scope.mcbride.videoPlayIconDisplay = true;
	$scope.mcbride.clickFunc=function(){
		console.log('here!!')
		$scope.mcbride.iframeDisplay = $scope.mcbride.iframeContent;
	}
	$scope.mcbride.trustDangriousSnippet = function(){
		console.log("great");
		return $sce.trustAsHtml($scope.mcbride.iframeDisplay);
	}
}]);

