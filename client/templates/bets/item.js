Template.betItem.helpers({
  openStatus: function() {
    return ( this.status === "open" ) ? true : false;
  },

  pendingStatus: function() {
    return ( this.status === "pending" ) ? true : false;
  },

  completedStatus: function() {
    return ( this.status === "completed" ) ? true : false;
  },

  showEditForm: function() {
    if(Session.get("edit")) {
      return true;
    }
    else {
      Session.set("edit", false)
      return false;
    }
  },
});

Template.betItem.events({
  'click .remove_bet_button' : function(){
    Bets.remove( this._id );
  },

  'click .accept_button' : function() {
    Bets.update({ _id: this._id },
      { $set: { status: "pending" }
    });
  },

  'click .complete_bet_button' : function() {
    Bets.update({ _id: this._id },
      { $set: { status: "completed" }
    });
  }
});
