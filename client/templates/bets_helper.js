Template.betsList.helpers({
  open_bets: Bets.find({status: "open"}),
  pending_bets: Bets.find({status: "pending"}),
  completed_bets: Bets.find({status: "completed"})
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
