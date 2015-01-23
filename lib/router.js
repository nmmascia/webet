Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('home', {
    path: '/'
  });
  this.route('pendingBetsList', {
    path: '/pending'
  });
})
