angular.module('app', [
  'templates'
]);

angular.element(document).ready( () => {
  angular.bootstrap(document, ['app'], { strictDi: true });
});

angular.module("templates", []);
