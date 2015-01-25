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
        defender = event.target.defender.value,
        type = "new"

    if (Meteor.users.find({username: defender}).count() === 0){

      throw new Meteor.Error(alert( "Sorry the Username you are trying to challenge is not valid!"))
    }

    if (defender === username) {
      throw new Meteor.Error(alert("You can't bet yourself!"))
    }

    Meteor.call("createBet", username, defender, title, wager)

    Meteor.call("createBetNotification", username, defender, type)

    Router.go('/bets')

  }
});
