Template.notifications.helpers({
  notifications: function(){
    return BetNotifications.find({ toNotify: Meteor.user().username });
  }
});