Template.betsList.helpers({
  bets: function(){
    var currentStatus = Session.get( "status" );

    return Bets.find({ $and:
      [ { status: currentStatus },
        { bettors: Session.get( "user" ) }
    ]});
  }
});

