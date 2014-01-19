'use strict';

describe('Controller: NavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('exampleApp'));

  var NavbarCtrl,
    scope,
    mocklocation;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    mocklocation = _$location_;
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope,
      $location: mocklocation
    });
  }));

  it('should return True when the location matches', function () {
    mocklocation.path('/');
    expect(scope.isActive('/')).toBe(true);
  });

  it('should return False when the location does not matches', function () {
    mocklocation.path('/whatever');
    expect(scope.isActive('/')).toBe(false);
  });

  it('should return True when the location matches in a local path', function () {
    mocklocation.path('/#/');
    expect(scope.isActive('/')).toBe(false);
  });

  it('should return False when the location does not matches', function () {
    mocklocation.path('/#/whatever');
    expect(scope.isActive('/')).toBe(false);
  });
});
