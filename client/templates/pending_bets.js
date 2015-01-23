Template.pendingBetsList.helpers({
  pending_bets: Bets.find({status: "pending"})
});
