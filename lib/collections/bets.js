Bets = new Meteor.Collection("bets");
// { title: "", wager: "", status: "winner OR paid",
// challenger_id: _id, defender_id: _id }
// Meteor.publish("user_bets", function() {
//   return Bets.find(
//       {$or: [{challenger: user.username},
//         {defender: user.username}]
//       }
//   }
// })
