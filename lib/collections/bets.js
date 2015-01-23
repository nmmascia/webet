Bets = new Meteor.Collection("bets");
// { title: "", wager: "", status: "winner OR paid",
// challenger_id: _id, defender_id: _id }}

Template.createBetForm.events({
  'submit form': function(event){
  	event.preventDefault();
    console.log("Your Bet Has Been Created"); 
	}
});