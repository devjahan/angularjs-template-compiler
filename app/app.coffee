'use strict'
angular.module('myApp', [
  'ngRoute'
  'myApp.view1'
  'myApp.view2'
]).config [
  '$locationProvider'
  '$routeProvider'
  ($locationProvider, $routeProvider) ->
    $locationProvider.hashPrefix '!'
    $routeProvider.otherwise redirectTo: '/view1'
    return
]