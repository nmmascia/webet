Template.createBetForm.helpers({
  photo: function(){
    return Session.get("photo");
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
        type = "new";

    if (Meteor.users.find({username: defender}).count() === 0){
      throw new Meteor.Error(
        alert( "Sorry the Username you are trying to challenge is not valid!" )
      );
    }

    if (defender === username) {
      throw new Meteor.Error(
        alert( "You can't bet yourself!" )
      );
    }

    Meteor.call('createBet', username, defender, title, wager, betImage);
    Meteor.call('createBetNotification', username, defender, type);
    Router.go('/bets');
  },

  "click .take-photo" : function(event){
    event.preventDefault();

    var cameraOptions = {
      width: 700,
      height: 500
    };

    MeteorCamera.getPicture(cameraOptions, function(error, data){
      var image = Images.insert(data);
      Session.set('image', data);
      Session.set('image._id', image._id);
    });
  }
});
