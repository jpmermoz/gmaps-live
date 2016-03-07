angular.module('gmaps-live').directive('eventsList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/app/events/events-list/events-list.ng.html',
    controllerAs: 'eventsList',
    link: function($scope, element) {
      element.css('width', '100%');
    },
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newEvent = {};

      this.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8,
        fit: true
      };

      this.subscribe('events');

      this.helpers({
        events: () => {
          return Events.find({});
        }
      });

      this.addEvent = () => {
        Events.insert(this.newEvent);
        this.showEvent(this.newEvent);
        this.newEvent = {};
      };

      this.showEvent = (event) => {
        this.map.center = event.eventPositions[0];
        this.map.fit = false;
        this.map.zoom = 16;
      }
    }
  }
});
