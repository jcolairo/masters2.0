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
    .state('users', {
      url: '/users',
      templateUrl: '/states/partials/users/users.html'
    })
    .state('user', {
      url: '/user/:uid',
      templateUrl: '/states/partials/users/user.html'
    })
    .state('breakfast', {
      url: '/menu/breakfast',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@breakfast': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@breakfast': {templateUrl: '/states/partials/menu/breakfast.html'}
      }
    })
    .state('singleProduct', {
      url: '/menu/breakfast/:id',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@singleProduct': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@singleProduct': {templateUrl: '/states/partials/menu/singleProduct.html'}
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


function tokenHeader ($rootScope) {
  return {
    request: function (config) {
      if ($rootScope && $rootScope.token) {
        config.headers.auth = $rootScope.token;
      }
      return config;
    }
  };
}

tokenHeader.$inject = ['$rootScope'];

function authInteceptor ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInteceptor');
}

authInteceptor.$inject = ['$httpProvider'];

angular
.module('MastersApp', ['ui.router', 'firebase'])
.config(MainRouter)
.factory('httpRequestInteceptor', tokenHeader)
.config(authInteceptor);
