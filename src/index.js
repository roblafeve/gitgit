// Main Aapp Module

angular.module('app', [
  'templates',
  'services',
  'directives'
]);


// Application Submodules

angular.module('directives', []);
angular.module('services', []);


// Bootstrap App when DOM is ready

angular.element(document).ready( () => {
  angular.bootstrap(document, ['app'], { strictDi: true });
});


// gulp-angular-templatecache adds templates here

angular.module("templates", []);
