describe('myController function', function() {

  var controller, scope;

  beforeEach(module('directives'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller("directiveCtrl", {
      $scope: scope
    });
  }));

  it('should be ok', function() {
    expect(controller.foo).to.equal('FOO');
  });

});
