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
})

.controller('AutorCtrl', function($scope) {
	$scope.autor={};
	$scope.autor.nombre="Maria Eugenia Pereyra";
	$scope.autor.foto="img/autor.jpg";
	$scope.autor.email="meugeniape@gmail.com";
	$scope.autor.github="https://github.com/EugeniaPereyra";
});
