Meteor.methods({
  createBet: function(user,defender,title,wager) {

    Bets.insert({
      bettors: [ user, defender ],
      status: "open",
      title: title,
      wager: wager
    });

  },

  deleteBet: function(bet_id){
    Bets.remove(bet_id)
  },

  updateStatus: function(bet_id, status){
    Bets.update({ _id : bet_id }, { $set: { status: status }})
  }
})