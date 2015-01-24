Template.betsList.helpers({
  bets: function(){
    var currentStatus = Session.get( "status" );

    return Bets.find({ $and:
      [ { status: currentStatus },
        { bettors: Session.get( "user" ) }
    ]});
  }
});

Template.betsList.events({
  "click .open-button" : function() {
    Session.set( "user", Meteor.user().username );
    Session.set( "status", "open" );
  },

  "click .pending-button" : function() {
    Session.set( "user", Meteor.user().username );
    Session.set( "status", "pending" );
  },

  "click .completed-button" : function() {
    Session.set( "user", Meteor.user().username );
    Session.set( "status", "completed" );
  }
})
