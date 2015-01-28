Template.count.helpers({
  notificationsCount: function(){
    return BetNotifications.find({
      toNotify: Session.get("user")
    }).count();
  }
});
