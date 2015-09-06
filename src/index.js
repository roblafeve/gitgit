// Main Aapp Module

angular.module('app', [
  'templates',
  'directives'
]);


// Application Submodules

angular.module('directives', []);


// Bootstrap App when DOM is ready

angular.element(document).ready( () => {
  angular.bootstrap(document, ['app'], { strictDi: true });
});


// gulp-angular-templatecache adds templates here

angular.module("templates", []);
