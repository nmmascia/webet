Template._bets.rendered = function() {
  Session.set("user", this.data.username);
};

Template._bets.helpers({
  openBets: function(){
    return Bets.find({ $and:
      [ { status: 'open' },
        { bettors: Session.get( 'user' ) }
    ]});
  },
  pendingBets: function(){
    return Bets.find({ $and:
      [ { status: 'pending' },
        { bettors: Session.get( 'user' ) }
    ]});
  },
  completedBets: function(){
    return Bets.find({ $and:
      [ { status: 'complete' },
        { bettors: Session.get( 'user' ) }
    ]});
  }
});

Template._bets.events({
  "click .open" : function(){
    Session.set( 'user', Meteor.user().username );
    Session.set( 'status', 'open' );
  },

  "click .pending" : function(){
    Session.set( 'user', Meteor.user().username );
    Session.set( 'status', 'pending' );
  },

  "click .completed" : function(){
    Session.set( 'user', Meteor.user().username );
    Session.set( 'status', 'complete' );
  }
});
