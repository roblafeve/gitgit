angular.module("directives").controller("directiveCtrl", function(
  notificationsSrvc
) {

  this.data = notificationsSrvc.data;

  this.find = function() {
    notificationsSrvc.find(98587124);
  }

  this.reset = function() {
    notificationsSrvc.reset();
  }

  this.sort = function() {
    notificationsSrvc.sortByDate();
  }

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
