Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe('bets');
    Meteor.subscribe('betNotifications');
  },
});

var notLoggedIn = function(){
  if( !Meteor.user() ){
    Router.go('home');
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', { only: 'singleBet' });
Router.onBeforeAction(notLoggedIn, { except: [ 'home' ] })

Router.map(function(){
  this.route('home', {
    path: '/',
    waitOn: function(){
      Meteor.subscribe('betNotifications');
    }
  });

  this.route('welcome', {
    path: '/welcome'
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
      Meteor.subscribe('friendsList');
    }
  });

  this.route('/bets/:_id', {
    name: 'singleBet',
    waitOn: function(){
      Meteor.subscribe('messages');
      Meteor.subscribe('images');
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

  this.route('/friends', {
    name: 'friendsList',
    waitOn: function() {
      Meteor.subscribe('myFriends', Meteor.userId());
    }
  })
});

