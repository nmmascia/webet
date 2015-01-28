Template.messages.helpers({
  messages: function(){
    return Messages.find({ bet: this._id }, {
      sort: { time: -1 }
    })
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

    if (user === this.bettors[0]){
      toNotify = this.bettors[1]
      betBy = this.bettors[0]
    } else {
      toNotify = this.bettors[0]
      betBy = this.bettors[1]
    }

    Meteor.call("createMessage", message, user, bet);
    Meteor.call("createBetNotification", betBy, toNotify, type, bet);
    event.target.message.value = '';
  }
});
