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
	$scope.Env.pageIds = ['page_welcome', 'page_sister', 'page_wineyard', 'page_redblend',/*'page_social', 'page_locator'*/, 'page_contactus', ];
	$scope.Env.pageHeights = []
	for ( ids in $scope.Env.pageIds ){
		var t = $scope.Env.pageIds[ids];
		console.log(t, document.getElementById(t), document.getElementById(t).getBoundingClientRect().top);
		$scope.Env.pageHeights.push( document.getElementById(t).getBoundingClientRect().top );
	}
	console.log($scope.Env.pageHeights);

	$scope.Env.OpenNewTab = function(addr){
		console.log('OpenNewTab');
		window.open( addr, '_blank');
	}

	$scope.Env.OpenNew = function( addr ){
		window.open(addr, '_self');
	}
	
	$scope.Env.scrollTo = function( eleId ){
    	console.log( eleId );

    	var gnHeight = document.getElementById('global-nav').clientHeight;
    	console.log( gnHeight);
    	var ele = document.getElementById(eleId);
    	$document.scrollToElement( ele, 0, 1500 );
    }

	$scope.globalNav = {}
	$scope.globalNav.disp = true;
	$scope.globalNav.navHeight = 0;
	$scope.globalNav.selectedNav = "sister";

	$document.on('scroll', function() {
		$scope.globalNav.navHeight = document.getElementById('global-nav').clientHeight;
		if ( $document.scrollTop() < $window.innerHeight - $scope.globalNav.navHeight ){
			$scope.globalNav.disp = true;
		}else {
			$scope.globalNav.disp = false;
		}
		$scope.Env.pageHeights={}
		var last = $scope.Env.pageIds[0];
		var flag = false;
		for ( ids in $scope.Env.pageIds ){
			var t = $scope.Env.pageIds[ids];
			var elePosition = document.getElementById(t).getBoundingClientRect().top;
			//console.log(t, document.getElementById(t).getBoundingClientRect().top);
			$scope.Env.pageHeights[t] =  document.getElementById(t).getBoundingClientRect().top ;
			$scope.globalNav.selectedNav = last;
			last = t;
			if ( elePosition - $scope.globalNav.navHeight < -1 ){
				continue;
			}
			else if ( elePosition - $scope.globalNav.navHeight > 1 ){
				flag= true; break;
			}else {
				$scope.globalNav.selectedNav = t;
				flag = true;break;
			}

/*
			if ( elePosition - $scope.globalNav.navHeight > 0 ){

				flag = true;break;
			}else if ( elePosition - $scope.globalNav.navHeight > -1 ){
				$scope.globalNav.selectedNav = t;
				console.log(t,elePosition, $scope.globalNav.navHeight);
    			console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    			flag = true;
				break;
			}*/
		}
		if (flag == false){
			$scope.globalNav.selectedNav = last;
		}
		$scope.$apply();
		
		console.log($scope.Env.pageHeights, $scope.globalNav.navHeight);
    	console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    	console.log('selectedNav ', $scope.globalNav.selectedNav);
    	
    });


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

}])
.controller('mobileNav', ['$scope', '$document', function( $scope, $document){
	$scope.name = 'mobileNav';
	$scope.MobileNav = {}
	$scope.MobileNav.disp = false;
	$scope.MobileNav.scrollTo = function( eleId ){
		$scope.MobileNav.disp = false;
    	console.log( eleId );
    	var gnHeight = document.getElementById('global-nav').clientHeight;
    	console.log( gnHeight);
    	var ele = document.getElementById(eleId);
    	$document.scrollToElement( ele, 0, 1500 );
    }
}]);
