Template._stats.helpers({
  completedBets: function(){
    return Bets.find({ status: "completed" }).count()
  },

  wonBets: function(){
    var user = Session.get("userObject")
    return Bets.find({ $and: [ { status: "completed" }, { winner: user.username }]}).count();
  }
});
