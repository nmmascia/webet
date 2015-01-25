describe("Template.createBetForm.events", function(){
  it("should create a bet with title", function(){
    var testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag"})
    expect(Bets.findOne(testBet).title).toEqual("I bet u fall off that one foot skateboard")
  });

  it("should create a bet with wager", function(){
    var testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag"})
    expect(Bets.findOne(testBet).wager).toEqual("a beach ball in a bag")
  });

   it("should create a bet with a status", function(){
    var testBet = Bets.insert({title: "I bet u fall off that one foot skateboard", wager: "a beach ball in a bag", status: "open"})
    expect(Bets.findOne(testBet).status).toEqual("open")
  });
});
