describe("Template.messages", function(){
  var testMessage;
  var originalCount;

   beforeEach(function(){
    originalCount = Messages.find({}).count();
    testMessage = Messages.insert({message: "Looks like you going to losing this one", sentBy: "nick", bet: "gAeAgX8wbSpiic2mm"});
   });

   it("should show a message with text that user inputs", function(){
     expect(Messages.findOne(testMessage).message).toEqual("Looks like you going to losing this one")
   });

   it("tells who the sender is", function(){
     expect(Messages.findOne(testMessage).sentBy).toEqual("nick")
   });

});