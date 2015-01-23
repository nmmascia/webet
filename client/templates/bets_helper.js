Template.betsList.helpers({
  open_bets: function(user) {
    return Bets.find({
    $and : [
      {status: "open"},
      {$or: [{challenger: user.username},
        {defender: user.username}]
      }
    ]
  })},
  pending_bets: function(user) {
    return Bets.find({
    $and : [
      {status: "pending"},
      {$or: [{challenger: user.username},
        {defender: user.username}]
      }
    ]
  })},
  completed_bets: function(user) {
    return Bets.find({
    $and : [
      {status: "completed"},
      {$or: [{challenger: user.username},
        {defender: user.username}]
      }
    ]
  })},
});

Template.betsList.events({
  "click .open-button": function() {
    $(".open-bets").show();
    $(".pending-bets").hide();
    $(".completed-bets").hide();
  },
  "click .pending-button": function() {
    $(".pending-bets").show();
    $(".open-bets").hide();
    $(".completed-bets").hide();
  },
  "click .completed-button": function() {
    $(".completed-bets").show();
    $(".pending-bets").hide();
    $(".open-bets").hide();
  }
})
