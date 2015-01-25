Meteor.methods({
  createBet: function(user,defender,title,wager) {

    Bets.insert({
      bettors: [ user, defender ],
      status: "open",
      title: title,
      wager: wager
    });

  }
})