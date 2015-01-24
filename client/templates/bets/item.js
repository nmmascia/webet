Template.betItem.helpers({
  openStatus: function() {
    return ( this.status === "open" ) ? true : false;
  },

  pendingStatus: function() {
    return ( this.status === "pending" ) ? true : false;
  },

  showEditForm: function() {
    if(Session.get("edit")) {
      return true
    }
    else {
      Session.set("edit", false)
      return false
    }
  }
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
  },

  'click .edit_button' : function() {
    Session.set('edit', !Session.get('edit'))
  },

  'submit .edit-bet' : function() {
    var title = event.target.betTitle.value;
        wager = event.target.betWager.value;
        user = Meteor.user(),
        defender_requested = event.target.defender.value;
        defender = Meteor.users.findOne({ username: defender_requested });

      Bets.update({ _id: this._id }, {
        bettors: [ user.username, defender.username ],
        status: "open",
        title: title,
        wager: wager
    });
  }
});
