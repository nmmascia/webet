Template._stats.helpers({
  statistics: function(){
    var user = Session.get('userObject'),
        completedBets = Bets.find({ status: 'completed' }).count(),
        wins = Bets.find({ winner: user }).count(),
        var points = Points.findOne({ wonBy: user });
        losses = completedBets - wins;

    return [wins, losses]
  }
});
