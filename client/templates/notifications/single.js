Template.singleNotification.events({
  "click .deleteNotification" : function(event) {
    event.preventDefault();
    Meteor.call("deleteNotification", this._id);
  }
});
