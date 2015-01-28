Template._stats.helpers({
  statistics: function(){
    var user = Session.get('userObject'),
        completedBets = Bets.find({ status: 'complete' }).count(),
        wins = Bets.find({ $and: [{ winner: user }, {status: 'complete'}]}).count(),
        points = Points.findOne({ wonBy: user }),

        losses = completedBets - wins;

    return [wins, losses]
  }
});
