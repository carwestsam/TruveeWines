var singleApp = angular.module('singleApp', ['ui.bootstrap', 'ngSanitize', 'duScroll']);

singleApp
.controller( 'globalEnv', ['$scope', '$document', '$location', '$anchorScroll' ,function( $scope, $document, $location, $anchorScroll ){
	$scope.Env = {};
	$scope.Env.OpenNewTab = function(addr){
		console.log('OpenNewTab');
		window.open( addr, '_blank');
	}
	$scope.Env.OpenNew = function( addr ){
		window.open(addr, '_self');
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
.controller('ContactCtrl', ['$scope','$http', function($scope,$http){
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
}])

