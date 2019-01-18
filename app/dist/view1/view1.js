'use strict';
angular.module('myApp.view1', ['ngRoute']).config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/view1',
  {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl as ctl'
    });
  }
]).controller('View1Ctrl', [
  function($scope) {
    var test;
    test = this;
    test.message = 'I am test';
    console.log($scope);
    test.student = {
      firstName: 'Jahan',
      lastName: 'Ara',
      fullName: function() {
        var studentObject;
        studentObject = test.student;
        return studentObject.firstName + ' ' + studentObject.lastName;
      }
    };
    return test;
  }
]);
