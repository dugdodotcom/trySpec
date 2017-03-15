angular.module('fakeLunchHubApp', ['ngRoute']).config(function($routeProvider, $locationProvider) {
  
  $routeProvider.when('/groups', {
    templateUrl: 'theme/groups',
    controller: 'GroupsCtrl'
  })
  $locationProvider.html5Mode(true);
})