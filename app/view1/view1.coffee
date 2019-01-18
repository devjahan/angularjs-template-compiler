'use strict'
angular.module('myApp.view1', [ 'ngRoute' ]).config([
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider.when '/view1',
      templateUrl: 'view1/view1.html'
      controller: 'View1Ctrl as ctl'
    return
]).controller 'View1Ctrl', [ ($scope) ->
  test = this
  test.message = 'I am test'
  console.log $scope
  test.student =
    firstName: 'Jahan'
    lastName: 'Ara'
    fullName: ->
      studentObject = test.student
      studentObject.firstName + ' ' + studentObject.lastName
  test
 ]