Template.friendsList.helpers({
  friends: function(){
    return Friends.find();
  }
});

Template.friendslist.event({
  'click .challenge_button': function() {

  }
})
