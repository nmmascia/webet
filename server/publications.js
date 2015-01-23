Meteor.publish('bets', function() {
  return Bets.find();
});
