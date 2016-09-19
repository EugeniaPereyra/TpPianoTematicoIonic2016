// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if( window.plugins && window.plugins.NativeAudio ) {
      window.plugins.NativeAudio.preloadSimple('bulbasaur', 'audio/bulbasaur.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('charmander', 'audio/charmander.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('clefairy', 'audio/clefairy.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('eevee', 'audio/eevee.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('meowth', 'audio/meowth.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('pikachu', 'audio/pikachu.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('psyduck', 'audio/psyduck.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('butterfree', 'audio/butterfree.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });

      window.plugins.NativeAudio.preloadSimple('squirtle', 'audio/squirtle.wav', function(mensaje){
        }, function(mensaje){
            console.log( 'Error: ' + mensaje );
        });
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('tab.piano', {
      url: '/piano/:nombre',
      views: {
        'tab-piano': {
          templateUrl: 'templates/tab-piano.html',
          controller: 'PianoCtrl'
        }
      }
    })

    .state('tab.grabados', {
      cache: false,
      url: '/grabados',
      views: {
        'tab-grabados': {
          templateUrl: 'templates/tab-grabados.html',
          controller: 'GrabadosCtrl'
        }
      }
    })
    

  .state('tab.autor', {
    url: '/autor',
    views: {
      'tab-autor': {
        templateUrl: 'templates/tab-autor.html',
        controller: 'AutorCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

});