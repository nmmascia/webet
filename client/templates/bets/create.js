var checkForDefender = function(defender){
  if (Meteor.users.find({username: defender}).count() === 0){
    throw new Meteor.Error(
      alert( "Sorry the Username you are trying to challenge is not valid!" )
    );
  }
};

var checkForUserAsDefender = function(options){
  if (options.defender === options.username) {
    throw new Meteor.Error(
      alert( "You can't bet yourself!" )
    );
  }
}

Template.createBetForm.helpers({
  image: function(){
    return Session.get("image");
  }
})

Template.createBetForm.events({
  "submit .create-bet" : function(event){
    event.preventDefault();

    var title = event.target.betTitle.value,
        wager = event.target.betWager.value,
        user = Meteor.user(),
        username = user.username,
        defender = event.target.defender.value,
        betImage = Session.get('image_id'),
        type = 'new';

    checkForUserAsDefender({ username: username, defender: defender });
    checkForDefender(defender);

    Meteor.call('createBet', username, defender, title, wager, betImage);
    Meteor.call('createBetNotification', username, defender, type);

    if (Friends.find({ $and: [ { user: user._id }, { friend: defender }  ]}).count() === 0) {

      Meteor.call("addFriend", defender_id, username);
      Meteor.call("addFriend", user._id, defender);
    }


    Router.go('/bets');
  },

  "click .take-photo" : function(event){
    event.preventDefault();

    var cameraOptions = {
      width: 700,
      height: 500,
      quality: 100
    };

    MeteorCamera.getPicture(cameraOptions, function(error, data){
      var image = Images.insert(data);
      Session.set('image', data);
      Session.set('image_id', image._id);
    });
  }
});