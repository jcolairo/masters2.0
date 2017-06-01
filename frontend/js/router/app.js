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
    .state('menu', {
      url: '/menu',
      templateUrl: '/states/partials/menu/menu.html'
    })
    .state('breakfast', {
      url: '/menu/breakfast',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@breakfast': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@breakfast': {templateUrl: '/states/partials/menu/breakfast.html'}
      }
    })
    .state('lunch', {
      url: '/menu/lunch',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@lunch': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@lunch': {templateUrl: '/states/partials/menu/lunch.html'}
      }
    })
    .state('afternoonTea', {
      url: '/menu/afternoonTea',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@afternoonTea': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@afternoonTea': {templateUrl: '/states/partials/menu/afternoonTea.html'}
      }
    })
    .state('canapes', {
      url: '/menu/canapes',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@canapes': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@canapes': {templateUrl: '/states/partials/menu/canapes.html'}
      }
    });

  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];


angular
.module('MastersApp', ['ui.router', 'firebase'])
.config(MainRouter);
