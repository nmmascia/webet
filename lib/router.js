Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe('bets');
    Meteor.subscribe('betNotifications');
  },
});

Router.onBeforeAction('dataNotFound', { only: 'singleBet' });

Router.map(function(){
  this.route('home', {
    path: '/',
    waitOn: function(){
      Meteor.subscribe('betNotifications');
    }
  });

  this.route('betsList', {
    path: '/bets'
  });

  this.route('dashboard', {
    path: 'dashboard',
    waitOn: function(){
      Meteor.subscribe('betNotifications');
    },
  });

  this.route('createBetForm', {
    path: 'bet',
    data: function(){
      Meteor.subscribe('allUsernames');
      Meteor.subscribe('images');
    }
  });

  this.route('/bets/:_id', {
    name: 'singleBet',
    waitOn: function(){
      Meteor.subscribe('messages');
      Meteor.subscribe('images')
    },
    data: function(){
      return Bets.findOne(this.params._id);
    }
  });

  this.route('/notifications', {
    name: 'notifications',
    waitOn: function(){
      Meteor.subscribe('betNotifications');
    },
  });

  this.route('/messages', {
    name: 'messages',
    waitOn: function(){
      Meteor.subscribe('messages');
    },
  });
});

