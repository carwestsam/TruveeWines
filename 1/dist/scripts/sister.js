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
	$scope.Env.pageIds = ['page_welcome', 'page_sisters', 'page_wineyard', 'page_redblend','page_social', /*'page_locator',*/ 'page_contactus', ];
	$scope.Env.pageHeights = []
	for ( ids in $scope.Env.pageIds ){
		var t = $scope.Env.pageIds[ids];
		console.log( t);
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

	$scope.mainStyleHeight = "{'height':'" + ($scope.Main.pageWidth/1.77).toString() + "px'}";
	$scope.mainStyleWidth = "{'width':'" + $scope.Main.pageWidth.toString() + "px'}";
} ])
.controller( 'mcbrideCtrl', ['$scope','$sce', function($scope,$sce){

	$scope.mcbride = {}
	//$scope.mcbride.iframeContent = '<iframe mozallowfullscreen="" allowfullscreen="" src="https://player.vimeo.com/video/121415789?wmode=opaque&amp;api=1" width="' + $scope.Main.pageWidth.toString() + '" webkitallowfullscreen="" frameborder="0" title="&quot; To Find&quot; The Story of The McBride Sisters &amp; Truvée Wines" height="' + $scope.Main.pageHeight.toString() +'"></iframe>';
	
	$scope.mcbride.iframeDisplay = "";
	$scope.mcbride.videoPlayIconDisplay = true;
	$scope.mcbride.clickFunc=function(){
		$scope.mcbride.iframeContent = '<iframe mozallowfullscreen="" allowfullscreen="" src="https://player.vimeo.com/video/121415789?wmode=opaque&amp;api=1" width="' + $scope.Main.pageWidth.toString() + '" webkitallowfullscreen="" frameborder="0" title="&quot; To Find&quot; The Story of The McBride Sisters &amp; Truvée Wines" height="'+ document.getElementById('videoBackground').style.height+'"></iframe>';
		console.log('here!!')
		console.log($scope.mcbride.iframeContent);
		$scope.mcbride.videoPlayIconDisplay = false;
		$scope.mcbride.iframeDisplay = $scope.mcbride.iframeContent;
	}
	$scope.mcbride.trustDangriousSnippet = function(){
		console.log("trusted");
		console.log($scope.mcbride.iframeContent);
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
}])
.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
	$scope.Contact = {};
	$scope.Contact.firstName = "";
	$scope.Contact.lastName = "";
	$scope.Contact.email = "";
	$scope.Contact.subject = "";
	$scope.Contact.message = "";

	$scope.ContactCtrl = {};
	$scope.ContactCtrl.btnText = "Submit";

	$scope.Error = {}
	$scope.Error.name = 0;
	$scope.Error.email = 0;
	$scope.Error.sub = 0;
	$scope.Error.msg = 0;
	$scope.Error.form = 0;

	$scope.ContactCtrl.btnClickFunc = function(){
            console.log('at btnclick');
		$scope.ContactCtrl.btnText = "Submitting...";
		if ( $scope.Contact.firstName.length > 0 || $scope.Contact.lastName.length > 0 ){
			$scope.Error.name = 0;
		}else {
			$scope.Error.name = 1;
		}

		var check = function( str ){
			console.log( str, typeof(str), typeof(str) == "undefined")
			if ( typeof(str) == "undefined" ){
				return 2;
			}else if ( str.length > 0 ){
				return 0;
			}else {
				return 1;
			}
		}

		console.log( $scope.Contact, $scope.Error )
		$scope.Error.email = check( $scope.Contact.email )
		$scope.Error.sub = check( $scope.Contact.subject )
		$scope.Error.msg = check( $scope.Contact.message )
		

		console.log( $scope.Contact, $scope.Error )
		if ( $scope.Error.name == 0 && $scope.Error.email == 0 && $scope.Error.sub == 0 && $scope.Error.msg == 0 ){
		    $scope.Error.form = 0;
                    $http
                        .post( '/sendmail.php',  $scope.Contact )
                        .success( function( data, status, headers, config ){
                            console.log('sendsuccess', data);
                            $scope.ContactCtrl.btnText = "Submited";
                            if ( data =='success' ){
                                document.getElementById('form').innerHTML='<p>Thank You!</p><br/><br/>';
                            }
                        } )
                        .error( function( data, status, headers, config ){
                            console.log('sendfailed');
                            $scope.ContactCtrl.btnText = "Submit";
                        } )
		}else {
			$scope.Error.form = 1;
		}
	}
	console.log('hello Contact');
}]);
