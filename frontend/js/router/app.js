function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/partials/home/home.html'
    })
    .state('auth-required', {
      url: '/auth-required',
      templateUrl: '/states/partials/auth/auth-required.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/states/partials/auth/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/states/partials/auth/signup.html'
    });

  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];


angular
.module('MastersApp', ['ui.router', 'firebase'])
.config(MainRouter);
