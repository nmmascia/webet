Template.navigation.events({
  "click .open-button" : function(){
    Session.set( "user", Meteor.user().username );
    Session.set( "status", "open" );
  },

  "click .pending-button" : function(){
    Session.set( "user", Meteor.user().username );
    Session.set( "status", "pending" );
  },

  "click .completed-button" : function(){
    Session.set( "user", Meteor.user().username );
    Session.set( "status", "completed" );
  }
});