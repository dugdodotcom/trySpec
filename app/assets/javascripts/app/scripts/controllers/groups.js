'use strict';
 
/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('GroupsCtrl', ['$scope', function ($scope) {
    $scope.groups = ['Group One', 'Group Two'];
  }]);