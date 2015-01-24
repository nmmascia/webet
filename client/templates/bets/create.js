var createBetNotification = function(bet){
  var bet = Bets.findOne({ _id: bet });

  BetNotifications.insert({
    toNotify: bet.bettors[1],
    betBy: bet.bettors[0]
  });
}

Template.createBetForm.events({
  "submit .create-bet": function(event) {
    var status = "open",
        title = event.target.betTitle.value;
        wager = event.target.betWager.value;
        user = Meteor.user(),
        defender_requested = event.target.defender.value;
        defender = Meteor.users.findOne({ username: defender_requested });

    var bet = Bets.insert({
      bettors: [ user.username, defender.username ],
      status: status,
      title: title,
      wager: wager
    });

    createBetNotification(bet);
  }
});
