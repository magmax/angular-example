'use strict';

angular.module('exampleApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return (viewLocation === $location.path());
    };
  });
