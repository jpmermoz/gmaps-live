Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  Api.addRoute('events', {
    post: function () {
      var id = Events.insert(this.bodyParams);
      return Events.findOne({_id: id});
    }
  });

  Api.addRoute('events/:id', {
    put: function () {
      entityIsUpdated = Events.update(this.urlParams.id, this.bodyParams)
      if (entityIsUpdated){
        return Events.findOne(this.urlParams.id);
      }
      else {
        return { statusCode: 404 }
      }
    }
  });
}
