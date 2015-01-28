Template.notifications.helpers({
  notifications: function(){
    return BetNotifications.find({ toNotify: Session.get("user") });
  }
});