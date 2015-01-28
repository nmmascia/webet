var checkForUserAsDefender = function(options){
  if( options.defender._id === options.user._id ){
    throw new Meteor.Error(
      alert( "You can't bet yourself!" )
    );
  }
};

var getDefenderByUsername = function(defender){
  var defender = Meteor.users.findOne({ username: defender });
  if( !defender ){
    throw new Meteor.Error( alert("Invalid User") );
  } else {
    return defender;
  }
};

var isFriend = function(user, defender){
  var friendship = Friends.findOne({ user: user, friend: defender });
  return (!friendship) ? true : false;
};

Template.createBetForm.helpers({
  image: function(){
    return Session.get("image");
  }
})

Template.createBetForm.events({
  "submit .create-bet" : function(event){
    event.preventDefault();
    var bet = {}
    bet.title = event.target.betTitle.value;
    bet.wager = event.target.betWager.value;
    bet.user = Meteor.user();
    bet.defender = getDefenderByUsername( event.target.defender.value );
    bet.image_id = Session.get('image_id');
    bet.type = 'bet';

    checkForUserAsDefender( bet );
    Meteor.call('createBet', bet);
    Meteor.call('createBetNotification', bet.user.username, bet.defender.username, bet.type);

    if( isFriend(bet.user._id, bet.defender.username) ) {
      Meteor.call("addFriend", bet.user._id, bet.defender.username);
      Meteor.call("addFriend", bet.defender._id, bet.user._id);
    }

    Router.go('/dashboard');
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