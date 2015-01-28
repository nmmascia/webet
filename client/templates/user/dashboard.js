Template.dashboard.rendered = function(){
    Session.set('userObject', this.data.username)
};

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
    Session.set( 'status', 'completed' );
  }
});
