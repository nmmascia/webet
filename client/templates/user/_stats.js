Template._stats.helpers({

  statistics: function(){
    var user = Session.get("userObject");

    var completedBets = Bets.find({ status: "completed" }).count();

    var wins = Bets.find({ winner: user}).count();

    var losses = completedBets - wins;

    return [wins, losses]
  }

});
