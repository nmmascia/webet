describe("Template.createBetForm.events", function(){
  var testBet;
  var originalCount;

  beforeEach(function(){
    originalCount = Bets.find({}).count();
	testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag", status: "open"});
  });

  it("should create a bet with title", function(){
    expect(Bets.findOne(testBet).title).toEqual("I bet u fall off that one foot skateboard")
  });

});