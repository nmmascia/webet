Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function(){
  this.route('home', {
    path: '/'
  });

  this.route('betsList', {
    path: '/bets'
  });

  this.route('dashboard', {
    path: 'dashboard'
  });

  this.route('createBetForm',{
    path: 'bet'
  });

  this.route('/bets/:_id', {
    name: 'singleBet',
    data: function() {return Bets.findOne(this.params._id)}
  });
});

