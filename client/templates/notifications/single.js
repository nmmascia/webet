Template.singleNotification.events({
  "submit .deleteNotification" : function(event) {
  event.preventDefault();
  var username = event.target.toNotify.value

  Meteor.call("deleteNotification", this._id);

  }
})