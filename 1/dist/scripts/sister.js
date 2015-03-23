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

var truveeApp = angular.module('truveeApp', ['ui.bootstrap', 'ngSanitize', 'duScroll']);

truveeApp
.controller( 'globalEnv', ['$scope', '$window', '$document', function( $scope, $window, $document){
	$scope.Env = {}
	$scope.Env.pageIds = ['page_welcome', 'page_sister', 'page_wineyard', 'page_redblend'];
	$scope.Env.pageHeights = []
	for ( ids in $scope.Env.pageIds ){
		var t = $scope.Env.pageIds[ids];
		console.log(t, document.getElementById(t), document.getElementById(t).getBoundingClientRect().top);
		$scope.Env.pageHeights.push( document.getElementById(t).getBoundingClientRect().top );
	}
	console.log($scope.Env.pageHeights);
}])
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
		$scope.mcbride.videoPlayIconDisplay = false;
		$scope.mcbride.iframeDisplay = $scope.mcbride.iframeContent;

	}
	$scope.mcbride.trustDangriousSnippet = function(){
		console.log("great");
		return $sce.trustAsHtml($scope.mcbride.iframeDisplay);
	}
}])
.controller('CarouselCtrl', function ($scope) {
	$scope.myInterval = 5000;
	var slides = $scope.slides= [];
	$scope.slides = [{image:"/images/gallery_3.jpg"},
					  {image:"/images/gallery_5.jpg"},
					  {image:"/images/gallery_2.jpeg"},
					  {image:"/images/gallery_1.jpg"},
					  {image:"/images/gallery_4.jpg"}];
})
.controller('globalNav', ['$scope', '$document', '$window', function($scope, $document,$window){
	$scope.name = "nav";
	$scope.globalNav = {}
	$scope.globalNav.disp = true;

	$document.on('scroll', function() {
		if ( $document.scrollTop() < $window.innerHeight - document.getElementById('global-nav').clientHeight ){
			$scope.globalNav.disp = true;
		}else {
			$scope.globalNav.disp = false;
		}
		$scope.$apply();

		$scope.Env.pageHeights=[]
		for ( ids in $scope.Env.pageIds ){
			var t = $scope.Env.pageIds[ids];
			console.log(t, document.getElementById(t), document.getElementById(t).getBoundingClientRect().top);
			$scope.Env.pageHeights.push( document.getElementById(t).getBoundingClientRect().top );
		}
		console.log($scope.Env.pageHeights);

		console.log($window.innerHeight, $scope.globalNav.disp);
    	console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    });

    $scope.globalNav.scrollTo = function( eleId ){
    	console.log( eleId );

    	var gnHeight = document.getElementById('global-nav').clientHeight;
    	console.log( gnHeight);
    	var ele = document.getElementById(eleId);
    	$document.scrollToElement( ele, gnHeight, 1500 );
    }

}]);
