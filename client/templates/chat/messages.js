Template.messages.helpers({
  messages: function(){
    return Messages.find({ bet: this._id },
      { sort: { time: -1 } }
    )
  }
});

Template.entry.events({
  "submit .messenger" : function(event){
    event.preventDefault();

    var message = event.target.message.value,
         user = Meteor.user().username,
         defender = this.bettors[1],
         type = "message"
          bet = this._id;

    Meteor.call("createMessage", message, user, bet);
    Meteor.call("createBetNotification", user, defender, type, bet);
    event.target.message.value = '';
  }
});
