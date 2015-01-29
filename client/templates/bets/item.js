Template.betItem.helpers({
  openStatus: function(){
    return ( this.status === "open" );
  },

  pendingStatus: function(){
    return ( this.status === "pending" );
  },

  completedStatus: function(){
    return ( this.status === "complete" );
  },

  showCompleteBetForm: function(){
    if( Session.get("complete?") ){
      return true;
    } else {
      Session.set("complete?", false);
      return false;
    }
  },

  displayWinner: function(){
    return (this.winner === Session.get("user"))
  }
});

Template.betItem.events({
  'click .remove_bet_button' : function(){
    Meteor.call("deleteBet", this._id);
    Meteor.call("deleteBetNotifications", this._id);
  },

  'click .paid_bet_button' : function(){
    Meteor.call("updateStatus", this._id, "paid")
  },

  'click .accept_button' : function(){
     Meteor.call("updateStatus", this._id, "pending");
     Meteor.call("createBetNotification", this.bettors[0], this.bettors[1], "accepted bet", this._id);
     var route = "/bets/" + this._id
     Router.go(route)
  },

  'click .complete_bet_button' : function(){
    Session.set( "complete?", !Session.get("complete?")) ;
    var route = "/bets/" + this._id;
    Router.go(route);
  },

  'submit .select-winner' : function(event){
    event.preventDefault();
    var winner =  event.target.children.choose_winner.value;

    Meteor.call("completeBet", this._id, winner );
    Session.set("complete?", false);
    Meteor.call("createPoints", 0, this._id);
    Meteor.call("incrementPoints",  this._id, 5);
    Meteor.call("createBetNotification", this.bettors[0], this.bettors[1], "completed bet", this._id);

  }
});
