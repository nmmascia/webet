Template.friendsList.rendered = function(){
  Session.set("userId", Meteor.userId())
};

Template.friendsList.helpers({
  friends: function(){
    return Friends.find({ user: Session.get("userId")})
  }
});

Template.friendsList.events({
  "click .challenge_button" : function(event) {
    var defender = this.friend
  Session.set("defender_name", this.friend)
  }
});