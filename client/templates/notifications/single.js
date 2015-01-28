Template.singleNotification.events({
  "click .deleteNotification" : function() {
    Meteor.call("deleteNotification", this._id);
  }
});
