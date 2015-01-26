describe("Template.createBetForm.events", function(){
  var testBet;
  var originalCount;

  beforeEach(function(){
    originalCount = Bets.find({}).count();
	testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag", status: "open"});
  });

  it("should create a bet with title that user inputs", function(){
    expect(Bets.findOne(testBet).title).toEqual("I bet u fall off that one foot skateboard")
  });

  it("should create a bet with wager that the user inputs", function(){
    expect(Bets.findOne(testBet).wager).toEqual("a beach ball in a bag")
  });

});