Template.friendsList.helpers({
  friends: function(){
    return Friends.find();
  }
});

Template.friendsList.events({
  "click .challenge_button" : function(event) {
    var defender = this.friend
  Session.set("defender_name", this.friend)
  }
});