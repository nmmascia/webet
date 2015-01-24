Meteor.publish('bets', function(){
  return Bets.find();
});

Meteor.publish('betNotifications', function(){
  return BetNotifications.find();
});
