var singleApp = angular.module('singleApp', ['ui.bootstrap', 'ngSanitize', 'duScroll']);

singleApp
.controller( 'globalEnv', ['$scope', '$document', '$location', '$anchorScroll' ,function( $scope, $document, $location, $anchorScroll ){
	$scope.Env = {};
	$scope.Env.OpenNewTab = function(addr){
		console.log('OpenNewTab');
		window.open( addr, '_blank');
	}
	$scope.Env.OpenNew = function( addr ){
		window.open(addr);
	}
	$scope.Env.scrollTo = function( eleId ){
    	var ele = document.getElementById(eleId);
    	$document.scrollToElement( ele, 0, 1500 );
    }
    $scope.Env.anchorScrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}
}])

