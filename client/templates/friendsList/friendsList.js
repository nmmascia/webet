Template.friendsList.helpers({
  friends: function(){
    return Friends.find();
  }
});