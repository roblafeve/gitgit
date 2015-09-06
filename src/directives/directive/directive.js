angular.module("directives").controller("directiveCtrl", () => {
  this.foo = "FOO";
});

angular.module("directives").directive("directive", () => {
  return {
    restrict: "C",
    templateUrl: "directives/directive/directive.html",
    controller: "directiveCtrl as dir",
    bindToContrller: {
      example: "="
    }
  }
});
