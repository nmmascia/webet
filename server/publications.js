Meteor.publish('bets', function(){
  return Bets.find();
});

Meteor.publish('betNotifications', function(username){
  return BetNotifications.find({ toNotify: username });
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
  return Friends.find();
});

 Meteor.publish("myFriends", function(userId) {
  return Friends.find({ user: userId })
 })

