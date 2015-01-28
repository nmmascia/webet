Template._bets.helpers({
  openBets: function(){
    return Bets.find({ $and:
      [ { status: "open" },
        { bettors: Session.get( "user" ) }
    ]});
  },
  pendingBets: function(){
    return Bets.find({ $and:
      [ { status: "pending" },
        { bettors: Session.get( "user" ) }
    ]});
  },
  completedBets: function(){
    return Bets.find({ $and:
      [ { status: "completed" },
        { bettors: Session.get( "user" ) }
    ]});
  }
});