describe("Template.messages", function(){
  var testMessage;
  var originalCount;

   beforeEach(function(){
    originalCount = Messages.find({}).count();
    testMessage = Messages.insert({message: "Looks like you going to losing this one", sentBy: "nick", bet: "gAeAgX8wbSpiic2mm"});
   });

});