Template._stats.helpers({
  completedBets: function(){
    return Bets.find({ status: "completed" }).count()
  }
})