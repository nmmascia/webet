Meteor.methods({
  createBet: function(user,defender,title,wager) {

    Bets.insert({
      bettors: [ user, defender ],
      status: "open",
      title: title,
      wager: wager,
      createdAt: new Date()
    });

  },

  deleteBet: function(bet_id){
    Bets.remove(bet_id)
  },

  completeBet: function(bet_id, winner){
    Bets.update(
      { _id: bet_id },
      { $set:
        { status: "complete",
        winner: winner,
        paid: false }
      }
    )
  },

  updateStatus: function(bet_id, status){
    Bets.update({ _id : bet_id }, { $set: { status: status }})
  },

  editBet: function(bet_id, user, defender, title, wager) {

    Bets.update({ _id: bet_id }, {
      bettors: [ user, defender],
      status: "open",
      title: title,
      wager: wager
    });
  },

  createMessage: function(message, sender, bet_id) {

    Messages.insert({
      message: message,
      sentBy: sender,
      bet: bet_id
    })
  }
})