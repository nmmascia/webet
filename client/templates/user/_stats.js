Template._stats.helpers({
  statistics: function(){
    var user = Session.get('user'),
        completedBets = Bets.find({ $and: [{ status: 'complete' }, { bettors: user }]}).count(),
        paidBets = Bets.find({ $and: [{ status: 'paid' }, { bettors: user }]}).count(),
        wins = Bets.find({ winner: user }).count(),
        points = Points.findOne({ wonBy: user }),
        losses = (paidBets + completedBets) - wins;

        console.log("WINS: " + wins);
        console.log("PAID BETS: " + paidBets);
        console.log("COMPLETED: " + completedBets);

    return [wins, losses]
  }
});
