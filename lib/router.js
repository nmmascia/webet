Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe("bets")
  },
});

Router.onBeforeAction('dataNotFound', { only: 'singleBet' })

Router.map(function(){
  this.route('home', {
    path: '/'
  });

  this.route('betsList', {
    path: '/bets'
  });

  this.route('dashboard', {
    path: 'dashboard',
    waitOn: function() {
      Meteor.subscribe('betNotifications')
    },
  });

  this.route('createBetForm',{
    path: 'bet'
  });

  this.route('/bets/:_id', {
    name: 'singleBet',
    data: function(){
      return Bets.findOne(this.params._id);
    }
  });

  this.route('/notifications', {
    name: 'notifications',
    waitOn: function() {
      Meteor.subscribe('betNotifications')
    },
  });

  this.route('/messages', {
    name: 'messages',
    waitOn: function() {
      Meteor.subscribe('messages')
    },
  });

});

