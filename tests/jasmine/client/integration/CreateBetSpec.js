describe("Template.createBetForm.events", function(){
  var testBet;

  beforeEach(function(){
    testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag", status: "open"});
  });
  it("should create a bet with title", function(){
    expect(Bets.findOne(testBet).title).toEqual("I bet u fall off that one foot skateboard")
  });

  it("should create a bet with wager", function(){
    expect(Bets.findOne(testBet).wager).toEqual("a beach ball in a bag")
  });

   it("should create a bet with a status", function(){
    expect(Bets.findOne(testBet).status).toEqual("open")
    });

   it("should create a bet with a title", function(){
    expect(Bets.findOne(testBet).title.length).not.toEqual(0)
    });

   it("should create a bet with a wager", function(){
    expect(Bets.findOne(testBet).wager.length).not.toEqual(0)
    });

});
