angular.module('gmaps-live').directive('eventsList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/app/events/events-list/events-list.ng.html',
    controllerAs: 'eventsList',
    link: function($scope, element) {
      element.css('width', '100%');
    },
    controller: function ($scope, $reactive, uiGmapGoogleMapApi) {
      $reactive(this).attach($scope);

      this.newEvent = {};

      this.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8
      }

      this.subscribe('events');

      this.helpers({
        events: () => {
          return Events.find({});
        }
      });

      this.addEvent = () => {
        Events.insert(this.newEvent);
        this.newEvent = {};
      };

      this.showEvent = (event) => {
        this.map.center = Object.create(event.eventPositions[0]);
        this.map.zoom = 16;
      }

      uiGmapGoogleMapApi.then(function(maps) {

      });
    }
  }
});
