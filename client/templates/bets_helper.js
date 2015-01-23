Template.betsList.helpers({
  open_bets: Bets.find({status: "open"}),
  pending_bets: Bets.find({status: "pending"}),
  completed_bets: Bets.find({status: "completed"})
});
