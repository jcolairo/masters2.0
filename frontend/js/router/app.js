function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {
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
      }
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
      url: '/users',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@users': {templateUrl: '/states/partials/users/users.html'},
        'footer@users': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('user', {
      url: '/user/:uid',
      views: {
        '': {templateUrl: '/states/partials/templateMain.html'},
        'menu@user': {templateUrl: '/states/partials/users/user.html'},
        'footer@user': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('croissant', {
      url: `/menu/breakfast/croissant`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@croissant': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@croissant': {templateUrl: '/states/partials/menu/breakfast/croissant.html'},
        'footer@croissant': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('muffin', {
      url: `/menu/breakfast/muffin`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@muffin': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@muffin': {templateUrl: '/states/partials/menu/breakfast/muffin.html'},
        'footer@muffin': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('danish', {
      url: `/menu/breakfast/danish`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@danish': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@danish': {templateUrl: '/states/partials/menu/breakfast/danish.html'},
        'footer@danish': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('donut', {
      url: `/menu/breakfast/donut`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@donut': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@donut': {templateUrl: '/states/partials/menu/breakfast/donut.html'},
        'footer@donut': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('bagel', {
      url: `/menu/breakfast/bagel`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@bagel': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@bagel': {templateUrl: '/states/partials/menu/breakfast/bagel.html'},
        'footer@bagel': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('roll', {
      url: `/menu/breakfast/roll`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@roll': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@roll': {templateUrl: '/states/partials/menu/breakfast/roll.html'},
        'footer@roll': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('baguette', {
      url: `/menu/breakfast/baguette`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@baguette': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@baguette': {templateUrl: '/states/partials/menu/breakfast/baguette.html'},
        'footer@baguette': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('bap', {
      url: `/menu/breakfast/bap`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@bap': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@bap': {templateUrl: '/states/partials/menu/breakfast/bap.html'},
        'footer@bap': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('yoghurt', {
      url: `/menu/breakfast/yoghurt`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@yoghurt': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@yoghurt': {templateUrl: '/states/partials/menu/breakfast/yoghurt.html'},
        'footer@yoghurt': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('fruit', {
      url: `/menu/breakfast/fruit`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@fruit': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@fruit': {templateUrl: '/states/partials/menu/breakfast/fruit.html'},
        'footer@fruit': {templateUrl: '/states/partials/footer/footer.html'}
      }
    })
    .state('breakfastDrinks', {
      url: `/menu/breakfast/breakfastDrinks`,
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@breakfastDrinks': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@breakfastDrinks': {templateUrl: '/states/partials/menu/breakfast/breakfastDrinks.html'},
        'footer@breakfastDrinks': {templateUrl: '/states/partials/footer/footer.html'}
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
    .state('singleProduct', {
      url: '/menu/breakfast/:id',
      views: {
        '': {templateUrl: '/states/partials/template.html'},
        'aside@singleProduct': {templateUrl: '/states/partials/menu/aside.html'},
        'menu@singleProduct': {templateUrl: '/states/partials/menu/singleProduct.html'},
        'footer@singleProduct': {templateUrl: '/states/partials/footer/footer.html'}
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
.config(authInteceptor);
