angular.module('gmaps-live', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'uiGmapgoogle-maps',
  'ngMessages'
]);

angular.module('gmaps-live').config(($mdIconProvider) => {
  $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");
});

function onReady() {
  angular.bootstrap(document, ['gmaps-live'], {
    strictDi: true
  });
}

if (Meteor.isCordova)
  angular.element(document).on("gmaps-live", onReady);
else
  angular.element(document).ready(onReady);
