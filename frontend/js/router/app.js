function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {

  var authRequired = {
    'currentAuth': ['AuthFactory', function(AuthFactory) {
      return AuthFactory.$requireSignIn();
    }]
  };

  var currentUser = {
    'currentUser': ['UserFactory', 'currentAuth', '$rootScope', function(UserFactory, currentAuth, $rootScope) {
      $rootScope.token = currentAuth._lat;
      return UserFactory.getSingleUser(currentAuth.uid);
    }]
  };

  var isAdmin = {
    'isAdmin': ['currentUser', function (currentUser) {
      return new Promise(function (resolve, reject){
        if (currentUser.data.is_admin) resolve(true);
        else reject('ADMIN_REQUIRED');
      });
    }]
  };

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@home': {templateUrl: '/states/partials/home/home.html'},
        'footer@home': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('auth-required', {
      url: '/auth-required',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@auth-required': {templateUrl: '/states/partials/auth/auth-required.html'},
        'footer@auth-required': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('login', {
      url: '/login',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@login': {templateUrl: '/states/partials/auth/login.html'},
        'footer@login': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('signup', {
      url: '/signup',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@signup': {templateUrl: '/states/partials/auth/signup.html'},
        'footer@signup': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('about', {
      url: '/about',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@about': {templateUrl: '/states/partials/about/about.html'},
        'footer@about': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('contact', {
      url: '/contact',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@contact': {templateUrl: '/states/partials/contact/contact.html'},
        'footer@contact': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('order', {
      url: '/order',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@order': {templateUrl: '/states/partials/order/order.html'},
        'footer@order': {templateUrl: '/states/partials/footer/footer.html'}
      },
      resolve: authRequired
    })
    .state('menu', {
      url: '/menu',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@menu': {templateUrl: '/states/partials/menu/menu.html'},
        'footer@menu': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('users', {
      url: '/admin',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@users': {templateUrl: '/states/partials/users/users.html'},
        'footer@users': {templateUrl: '/states/partials/footer/footer.html'}
      },
      resolve: Object.assign({}, authRequired, currentUser, isAdmin)
    })
    .state('user', {
      url: '/user/:uid',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@user': {templateUrl: '/states/partials/users/user.html'},
        'footer@user': {templateUrl: '/states/partials/footer/footer.html'}
      },
      resolve: authRequired
    })
    .state('sub_category', {
      url: `/menu/:category/:sub_category`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@sub_category': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@sub_category': {templateUrl: '/states/partials/menu/subCat/sub_category.html'},
        'footer@sub_category': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('combo', {
      url: `/combo/:category/:sub_category`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@combo': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@combo': {templateUrl: '/states/partials/menu/subCat/combo-order.html'},
        'footer@combo': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('breakfast', {
      url: '/menu/breakfast',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@breakfast': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@breakfast': {templateUrl: '/states/partials/menu/breakfast.html'},
        'footer@breakfast': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('lunch', {
      url: '/menu/lunch',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@lunch': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@lunch': {templateUrl: '/states/partials/menu/lunch.html'},
        'footer@lunch': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('afternoonTea', {
      url: '/menu/afternoonTea',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@afternoonTea': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@afternoonTea': {templateUrl: '/states/partials/menu/afternoonTea.html'},
        'footer@afternoonTea': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('canapes', {
      url: '/menu/canapes',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@canapes': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@canapes': {templateUrl: '/states/partials/menu/canapes.html'},
        'footer@canapes': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('singleProduct', {
      url: '/menu/:id',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@singleProduct': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@singleProduct': {templateUrl: '/states/partials/menu/singleProduct.html'},
        'footer@singleProduct': {templateUrl: '/states/partials/footer/footer.html'}
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
  .module('MastersApp', ['ui.router', 'firebase', 'sticky'])
  .config(MainRouter)
  .factory('httpRequestInteceptor', tokenHeader)
  .config(authInteceptor)
  .run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log('State Change Error: ', error);
      if (error === 'AUTH_REQUIRED' || error === 'ADMIN_REQUIRED') {
        $state.go('auth-required');
      }
    });
  }]);
