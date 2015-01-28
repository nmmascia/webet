Meteor.publish('bets', function(){
  return Bets.find();
});

Meteor.publish('myBets', function(username) {
  return Bets.find({
    bettors: username
  });
});

Meteor.publish('betNotifications', function(){
  return BetNotifications.find({ toNotify: this.userId });
});

Meteor.publish('messages', function(){
  return Messages.find();
});

Meteor.publish('allUsernames', function(){
  return Meteor.users.find();
});

Meteor.publish('images', function(){
  return Images.find();

});

Meteor.publish("friendsList", function() {
  return Friends.find({ user: this.userId });
});

 Meteor.publish("myFriends", function() {
  return Friends.find({ user: this.userId })
 })

Meteor.publish('points', function(){
  return Points.find();
});