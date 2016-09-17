angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
	$scope.usuarioLog={};

	$scope.Guardar=function(){
		var dato=JSON.stringify($scope.usuarioLog);
		$state.go("tab.piano",{nombre:dato});
	}
})

.controller('PianoCtrl', function($scope, $timeout, $stateParams) {
	$scope.usuario={};
	var nombre=JSON.parse($stateParams.nombre);
  	$scope.usuario.puntaje=0;
  	$scope.usuario.nombre=nombre.nombreLog;

	$scope.botones = [1,2,3,4,5,6,7,8,9];
	$scope.columnas = 3;
	$scope.filas = $scope.botones.length / $scope.columnas; // agrupo los botones de a 3

	$scope.getFilas = function(){
	   return new Array($scope.filas);
	};
	  
	$scope.sonar = function(eventoClick){
	   console.log(eventoClick.target.id);
	 
	}
})

.controller('AutorCtrl', function($scope) {
	$scope.autor={};
	$scope.autor.nombre="Maria Eugenia Pereyra";
	$scope.autor.foto="img/autor.jpg";
	$scope.autor.email="meugeniape@gmail.com";
	$scope.autor.github="https://github.com/EugeniaPereyra";
});
