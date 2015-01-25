var createBetNotification = function(bet){
  var bet = Bets.findOne({ _id: bet });

  BetNotifications.insert({
    toNotify: bet.bettors[1],
    betBy: bet.bettors[0],
    bet: bet._id
  });
}

Template.createBetForm.events({
  "submit .create-bet" : function(event){
    event.preventDefault();

    var title = event.target.betTitle.value,
        wager = event.target.betWager.value,
        user = Meteor.user(),
        username = user.username,
        defender = event.target.defender.value;

    Meteor.call("createBet", username, defender, title, wager)

    Router.go('/bets')

  }
});
