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

  it("creates bet that start off with an open status", function(){
    expect(Bets.findOne(testBet).status).toEqual("open")
  });

  it("should not have newly created bets with pending status ", function(){
    expect(Bets.findOne(testBet).status).not.toEqual("pending")
  });

  it("can't create a bet with the status completed", function(){
    expect(Bets.findOne(testBet).status).not.toEqual("completed")
  });

  it(" should have users input text for bet title", function(){
    expect(Bets.findOne(testBet).title.length).not.toEqual(0)
  });

});