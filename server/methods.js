Meteor.methods({
  createBet: function(user, defender, title, wager, image_id) {
    Bets.insert({
      bettors: [ user, defender ],
      status: "open",
      title: title,
      wager: wager,
      image_id: image_id,
      createdAt: new Date()
    });
  },

  createBetNotification: function(user, defender, type, bet_id) {
    BetNotifications.insert({
      toNotify: defender,
      betBy: user,
      type: type,
      bet_id: bet_id
    });
  },

  deleteBet: function(bet_id){
    Bets.remove(bet_id)
  },

  completeBet: function(bet_id, winner){
    Bets.update(
      { _id: bet_id },
      { $set:
        { status: "completed",
          winner: winner,
          paid: false }
    });
  },

  updateStatus: function(bet_id, status){
    Bets.update({ _id : bet_id }, { $set: { status: status }})
  },

  editBet: function(bet_id, user, defender, title, wager) {
    Bets.update({ _id: bet_id }, {
      bettors: [ user, defender],
      status: "open",
      title: title,
      wager: wager
    });
  },

  createMessage: function(message, sender, bet_id){
    Messages.insert({
      message: message,
      sentBy: sender,
      bet: bet_id
    });
  },

  addFriend: function(user_id, friendsName) {
    Friends.insert({
      user: user_id,
      friend: friendsName
    });
  },

  deleteNotification: function(notification_id){
    BetNotifications.remove({ _id: notification_id })
  }
});
