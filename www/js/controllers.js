angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
	$scope.usuarioLog={};

	$scope.Guardar=function(){
		var dato=JSON.stringify($scope.usuarioLog);
		$state.go("tab.piano",{nombre:dato});
	}
})

.controller('PianoCtrl', function($scope, $timeout, $stateParams, $cordovaVibration, $cordovaNativeAudio, $cordovaFile, $ionicPopup) {
	document.addEventListener("deviceready", 
		function onDeviceReady() {
		  $cordovaFile.createFile(cordova.file.externalRootDirectory, "archivo.txt",true) // cordova.file.dataDirectory
	      .then(function (success) {
	        // success
	      }, function (error) {
	        // error
	      });
		}, false);

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
	   			if($scope.apretado)
		    	{
		    		$scope.apretado.push('bulbasaur');
		    	}
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
		    	if($scope.apretado)
		    	{
		    		$scope.apretado.push('charmander');
		    	}
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
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('clefairy');
		   		}
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
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('eevee');
		   		}
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
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('meowth');
		   		}
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
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('pikachu');
		   		}
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
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('psyduck');
		   		}
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
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('butterfree');
		   		}
			   	try
			  	{
					$cordovaVibration.vibrate(300);
		    		$cordovaNativeAudio.play('butterfree');
		    	}
		    	catch(e)
		    	{
		    		console.log("La vibracion y el sonido, solo funcionan en celulares");
		    	}
		    	break;

	   		case 'btn_fila_2_col_2':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('squirtle');
		   		}
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

	$scope.Grabar=function(){
		$scope.apretado=[];
	}

	$scope.Parar=function(){
		var archivo={};
		archivo.usuario=$scope.usuario.nombre;
		archivo.sonidos=$scope.apretado;

		var confirmPopup = $ionicPopup.confirm({
     		title: 'Guardar',
     		template: '¿Desea guardar en archivo?',
     		cssClass:'salida',
     		okType: 'button-energized',
   		});

   		confirmPopup.then(function(res) {
     		if(res) {
       			$cordovaFile.writeFile(cordova.file.externalRootDirectory, "archivo.txt", archivo, true)
				      .then(function (success) {
				        // success
				      }, function (error) {
				        // error
				      });
     		}
   		});

	    $scope.copia=$scope.apretado;
	    $scope.apretado=null;
	}

	$scope.Escuchar=function(){
		var retraso=0;

        angular.forEach($scope.copia, function(value, index) {

        	try
        	{
        		$timeout(function(){$cordovaNativeAudio.play(value);},retraso);
        	}
        	catch(e)
        	{
        		console.log("La vibracion y el sonido, solo funcionan en celulares");
        	}

            retraso+=1000;
        });  
	}
})

.controller('GrabadoCtrl', function($scope, $cordovaFile) {
	$scope.archivo={};
	document.addEventListener("deviceready", 
		function onDeviceReady() {
			$cordovaFile.readAsText(cordova.file.externalRootDirectory, "archivo.txt")
				      .then(function (success) {
				        // success
				        var dato=JSON.parse(success);
				        $scope.archivo=dato;
				      }, function (error) {
				        // error
				      });
		}, false);
})

.controller('AutorCtrl', function($scope) {
	$scope.autor={};
	$scope.autor.nombre="Maria Eugenia Pereyra";
	$scope.autor.foto="img/autor.jpg";
	$scope.autor.email="meugeniape@gmail.com";
	$scope.autor.github="https://github.com/EugeniaPereyra";
});
