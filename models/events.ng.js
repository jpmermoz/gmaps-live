Events = new Mongo.Collection("events");

Event = Astro.Class({
  name: 'Event',
  collection: Events,
  fields: {
    description: {
      type: 'string',
      validator: Validators.required()
    },
    location: {
      type: 'object',
      default: function(){
        return {};
      },
      nested: {
        name: 'location',
        fields: {
          latitude: {
            type: 'string',
            validator: Validators.required()
          },
          longitude: {
            type: 'string',
            validator: Validators.required()
          }
        }
      }
    }
  }
});
