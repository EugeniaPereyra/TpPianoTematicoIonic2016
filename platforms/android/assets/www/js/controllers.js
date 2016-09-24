angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
	$scope.usuarioLog={};

	$scope.Guardar=function(){
		var dato=JSON.stringify($scope.usuarioLog);
		$state.go("tab.piano",{nombre:dato});
		$scope.usuarioLog.nombreLog="";
	}
})

.controller('PianoCtrl', function($scope, $timeout, $stateParams, $cordovaVibration, $cordovaNativeAudio, $cordovaFile, $ionicPopup) {
	document.addEventListener("deviceready", 
		function onDeviceReady() {
		  $cordovaFile.createFile(cordova.file.externalRootDirectory, "piano.txt",true) // cordova.file.dataDirectory //cordova.file.externalRootDirectory
	      .then(function (success) {
	        // success
	        console.log("archivo creado");
	      }, function (error) {
	        // error
	        console.log(error);
	      });
		}, false);

	$scope.usuario={};
	var nombre=JSON.parse($stateParams.nombre);
  	$scope.usuario.nombre=nombre.nombreLog;

	$scope.botones = [1,2,3,4,5,6,7,8,9];
	$scope.columnas = 3;
	$scope.filas = $scope.botones.length / $scope.columnas; // agrupo los botones de a 3
	$scope.grabados=[];

	try{
		$cordovaFile.checkFile(cordova.file.externalRootDirectory, "piano.txt") // cordova.file.dataDirectory //cordova.file.externalRootDirectory
	        .then(function (success) {
	          // succes
	          $cordovaFile.readAsText(cordova.file.externalRootDirectory, "piano.txt")
	                  .then(function (success) {
	                    var dato=JSON.parse(success);
	                    $scope.grabados=dato;
	                  }, function (error) {
	                    // error
	                    console.log(error);
	                  });
	        }, function (error) {
	          // error
	          console.log(error);
	        });
	}
	catch(e)
	{
		console.log("El plugin File funciona en dispositivos unicamente");
	}

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
		    	Reproducir('bulbasaur',300);
		    	break;

		    case 'btn_fila_0_col_1':
		    	if($scope.apretado)
		    	{
		    		$scope.apretado.push('charmander');
		    	}
		    	Reproducir('charmander',300);
		    	break;

	   		case 'btn_fila_0_col_2':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('clefairy');
		   		}
		   		Reproducir('clefairy',300);
		    	break;

	   		case 'btn_fila_1_col_0':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('eevee');
		   		}
		   		Reproducir('eevee',300);
		    	break;

	   		case 'btn_fila_1_col_1':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('meowth');
		   		}
		   		Reproducir('meowth',300);
		    	break;

	   		case 'btn_fila_1_col_2':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('pikachu');
		   		}
		   		Reproducir('pikachu',300);
		    	break;

	   		case 'btn_fila_2_col_0':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('psyduck');
		   		}
		   		Reproducir('psyduck',300);
		    	break;

	   		case 'btn_fila_2_col_1':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('butterfree');
		   		}
				Reproducir('butterfree',300);
		    	break;

	   		case 'btn_fila_2_col_2':
		    	if($scope.apretado)
		    	{
		   			$scope.apretado.push('squirtle');
		   		}
		   		Reproducir('squirtle',300);
		    	break;
    	} 
	}

	function Reproducir(sonido,tiempo){
		try
		{
			$cordovaVibration.vibrate(tiempo);
			$cordovaNativeAudio.play(sonido);
		}
		catch(e)
		{
			console.log("La vibracion y el sonido, solo funcionan en celulares");
		}
	}

	$scope.Grabar=function(){
		$scope.apretado=[];
	}

	$scope.Parar=function(){
		var archivo={};
		archivo.nombre=$scope.usuario.nombre;
		archivo.sonidos=$scope.apretado;

		if($scope.apretado!=null && $scope.apretado.length!=0)
		{
			var confirmPopup = $ionicPopup.confirm({
	     		title: 'Guardar',
	     		template: '¿Desea guardar en archivo?',
	     		cssClass:'salida',
	     		okType: 'button-energized',
	   		});
	   		
	      $scope.grabados.push(archivo);
	      var dato=JSON.stringify($scope.grabados);

	   		confirmPopup.then(function(res) {
	     		if(res) {
	     			try{     				
		       			$cordovaFile.writeFile(cordova.file.externalRootDirectory, "piano.txt", dato, true)
						      .then(function (success) {
						        // success
						        console.log("archivo guardado");
						      }, function (error) {
						        // error
						        console.log(error);
						      });
					}
					catch(e)
					{
						console.log("El plugin File funciona en dispositivos unicamente");
					}
	     		}
	   		});
	   	}

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
			$cordovaFile.readAsText(cordova.file.externalRootDirectory, "piano.txt")
				      .then(function (success) {
				        // success
				        var dato=JSON.parse(success);
				        $scope.archivo=dato;		                
				      }, function (error) {
				        // error
				        console.log(error);
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
