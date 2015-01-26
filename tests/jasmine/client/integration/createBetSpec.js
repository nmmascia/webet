describe("Template.createBetForm.events", function(){
  var testBet;
  var originalCount;

  beforeEach(function(){
    originalCount = Bets.find({}).count();
	testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag", status: "open"});
  });

});