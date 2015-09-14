describe('notificationsCtrl', function() {

  var controller;
  beforeEach(module('directives'));
  beforeEach(module('services'));
  beforeEach(inject( (
      $controller,
      notificationsSrvc
    ) => {
      controller = $controller("directiveCtrl");
    })
  );


  it('should have a data object', () => {
    assert.isObject(controller.data, 'data property is an object')
  });

});
