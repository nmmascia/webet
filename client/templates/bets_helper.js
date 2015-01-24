Template.betsList.helpers({
  bets: function() {
  var current_status = Session.get("status");
  return Bets.find({$and: [{status: current_status}, {bettors: Session.get("user")}]})
  }
});

Template.betsList.events({
  "click .open-button": function() {
    Session.set("user", Meteor.user().username)
    Session.set("status", "open")
  },
  "click .pending-button": function() {
    Session.set("user", Meteor.user().username)
    Session.set("status", "pending")
  },
  "click .completed-button": function() {
    Session.set("user", Meteor.user().username)
    Session.set("status", "completed")
  }
})
