Template.betItem.helpers({
  openStatus: function(){
    return ( this.status === "open" ) ? true : false;
  },

  pendingStatus: function(){
    return ( this.status === "pending" ) ? true : false;
  },

  completedStatus: function(){
    return ( this.status === "completed" ) ? true : false;
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

Template.betItem.events({
  'click .remove_bet_button' : function(){
    Meteor.call("deleteBet", this._id);
  },

  'click .accept_button' : function(){
     Meteor.call("updateStatus", this._id, "pending");
     Meteor.call("createBetNotification", this.bettors[0], this.bettors[1], "accepted bet", this._id);
  },

  'click .complete_bet_button' : function(){
    Session.set("complete?", !Session.get("complete?"))
  },

  'submit .select-winner' : function(event){
    event.preventDefault();
    var winner =  event.target.children.choose_winner.value;

    Meteor.call("completeBet", this._id, winner );
    Session.set("complete?", false);
    Meteor.call("createBetNotification", this.bettors[0], this.bettors[1], "completed bet", this._id);
  }
});
