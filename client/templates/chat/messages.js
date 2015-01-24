Template.messages.helpers({
  messages: function(){
    return Messages.find({},
      { sort: { time: -1 } }
    )
  }
});

Template.entry.events({
  "submit .messenger" : function(event){
    event.preventDefault();
    var message = event.target.message.value,
         sentBy = Meteor.user().username;

    Messages.insert({
      message: message,
      sentBy: sentBy
    });
  }
});
