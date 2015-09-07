angular.module("directives").controller("directiveCtrl", () => {
  var ctrl = {};
  ctrl.foo = "FOO";
  return ctrl;
});

angular.module("directives").directive("notifications", () => {
  return {
    restrict: "C",
    templateUrl: "directives/directive/directive.html",
    controller: "directiveCtrl",
    controllerAs: "notifications",
    scope: true,
    bindToContrller: {}
  }
});
