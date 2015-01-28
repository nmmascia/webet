Template.singleBet.helpers({
  openStatus: function(){
    return ( this.status === "open" ) ? true : false;
  },

  pendingStatus: function(){
    return ( this.status === "pending" ) ? true : false;
  },

  completedStatus: function(){
    return ( this.status === "completed" ) ? true : false;
  },

  showEditForm: function(){
    if( Session.get("edit") ){
      return true;
    } else {
      Session.set("edit", false);
      return false;
    }
  },

  showCompleteBetForm: function(){
    if( Session.get("complete?") ){
      return true;
    } else {
      Session.set("complete?", false);
      return false;
    }
  }
});

Template.singleBet.events({
  'click .remove_bet_button' : function(){
    Meteor.call("deleteBet", this._id);
    Router.go('/bets')
  },

  'click .accept_button' : function(){
     Meteor.call("updateStatus", this._id, "pending");
     Meteor.call("createBetNotification", this.bettors[0], this.bettors[1], "accepted", this._id);
  },

  'click .complete_bet_button' : function(){
    Session.set( "complete?", !Session.get("complete?") )
  },

  'click .edit_button' : function(){
    Session.set( 'edit', !Session.get('edit') );
  },

  'submit .select-winner' : function(event){
    event.preventDefault();
    var winner =  event.target.children.choose_winner.value;

    Meteor.call("completeBet", this._id, winner );
    Session.set("complete?", false);
    Meteor.call("createBetNotification", this.bettors[0], this.bettors[1], "completed", this._id);
  },

  'submit .edit-bet' : function(event){
    event.preventDefault();

    var bet = {}
    bet._id = this._id;
    bet.title = event.target.betTitle.value;
    bet.wager = event.target.betWager.value;
    bet.user = Meteor.user();
    bet.defender = Meteor.users.findOne({ username: event.target.defender.value });

    Meteor.call( 'editBet', bet );
    Session.set( 'edit', !Session.get('edit') );
  }
});
