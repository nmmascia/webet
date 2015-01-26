Template.count.helpers({
  notificationsCount: function(){
    return BetNotifications.find({
      toNotify: Meteor.user().username
    }).count();
  }
})
