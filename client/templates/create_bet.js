Template.createBetForm.events({
  "submit .create-bet": function(event) {
    var status = "open";
    var title = event.target.betTitle.value;
    var wager = event.target.betWager.value;
    var user = Meteor.user();

    var d_username = event.target.defender.value;
    var defender = Meteor.users.findOne({ username: d_username })

    Bets.insert({
      challenger: user.username,
      defender: defender.username,
      status: status,
      title: title,
      wager: wager
    });
  }
})
