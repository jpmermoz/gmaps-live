angular.module('gmaps-live').directive('eventsList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/events/events-list/events-list.ng.html',
    controllerAs: 'eventsList',
    link: function($scope, element) {
      element.css('width', '100%');
    },
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newEvent = new Event();

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
        if (this.newEvent.validate()) {
          this.newEvent.save();
          this.newEvent = new Event();
        }
      };

      this.showEvent = (event) => {
        this.map.center = event.location;
        this.map.fit = false;
        this.map.zoom = 16;
      }
    }
  }
});
