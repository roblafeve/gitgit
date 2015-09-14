angular.module('app').run(function($http) {
  $http.defaults.headers.common.Accept = 'application/vnd.github.v3+json'
  $http.defaults.headers.common.Authorization = 'Basic cm9ibGFmZXZlOm5MdkFuYkFEeFduZERRZFZQZ3VjV2FHaWlkNFlYcURkaGRSREpWRFdORUtORGh6UTdw'
});
