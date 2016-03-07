angular.module('gmaps-live')
.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('events', {
    url: '/events',
    template: '<events-list></events-list>'
  });
  
  $urlRouterProvider.otherwise("/events");
});
