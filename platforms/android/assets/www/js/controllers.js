angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
	$scope.usuarioLog={};

	$scope.Guardar=function(){
		var dato=JSON.stringify($scope.usuarioLog);
		$state.go("tab.piano",{nombre:dato});
	}
})

.controller('PianoCtrl', function($scope, $timeout, $stateParams, $cordovaVibration, $cordovaNativeAudio, $timeout) {
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
	  
	$scope.Seleccionar = function(eventoClick){
	   	
	   	switch(eventoClick.target.id)
	   	{
	   		case 'btn_fila_0_col_0':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('bulbasaur');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

		    case 'btn_fila_0_col_1':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('charmander');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_0_col_2':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('clefairy');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_1_col_0':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('eevee');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_1_col_1':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('meowth');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_1_col_2':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('pikachu');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_2_col_0':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('psyduck');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_2_col_1':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('snorlax');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_2_col_2':
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('squirtle');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;
    	}
	 
	}
})

.controller('AutorCtrl', function($scope) {
	$scope.autor={};
	$scope.autor.nombre="Maria Eugenia Pereyra";
	$scope.autor.foto="img/autor.jpg";
	$scope.autor.email="meugeniape@gmail.com";
	$scope.autor.github="https://github.com/EugeniaPereyra";
});
