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
    })
    .state('about', {
      url: '/about',
      templateUrl: '/states/partials/about/about.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/states/partials/contact/contact.html'
    })
    .state('order', {
      url: '/order',
      templateUrl: '/states/partials/order/order.html'
    })
    .state('breakfast', {
      url: '/menu/breakfast',
      templateUrl: '/states/partials/menu/breakfast.html'
    })
    .state('lunch', {
      url: '/menu/lunch',
      templateUrl: '/states/partials/menu/lunch.html'
    })
    .state('afternoonTea', {
      url: '/menu/afternoonTea',
      templateUrl: '/states/partials/menu/afternoonTea.html'
    })
    .state('canapes', {
      url: '/menu/canapes',
      templateUrl: '/states/partials/menu/canapes.html'
    });

  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];


angular
.module('MastersApp', ['ui.router', 'firebase'])
.config(MainRouter);
