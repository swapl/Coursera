{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Ionic Starter App\
\
// angular.module is a global place for creating, registering and retrieving Angular modules\
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)\
// the 2nd parameter is an array of 'requires'\
// 'starter.controllers' is found in controllers.js\
angular.module('conFusion', ['ionic', 'conFusion.controllers','conFusion.services'])\
.run(function($ionicPlatform, $rootScope, $ionicLoading) \{\
  $ionicPlatform.ready(function() \{\
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard\
      // for form inputs)\
      if (window.cordova && window.cordova.plugins.Keyboard) \{\
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);\
          cordova.plugins.Keyboard.disableScroll(true);\
      \}\
      if (window.StatusBar) \{\
          // org.apache.cordova.statusbar required\
          StatusBar.styleDefault();\
      \}\
  \});\
    $rootScope.$on('loading:show', function () \{\
        $ionicLoading.show(\{\
            template: '<ion-spinner></ion-spinner> Loading ...'\
        \})\
    \});\
\
    $rootScope.$on('loading:hide', function () \{\
        $ionicLoading.hide();\
    \});\
\
    $rootScope.$on('$stateChangeStart', function () \{\
        console.log('Loading ...');\
        $rootScope.$broadcast('loading:show');\
    \});\
\
    $rootScope.$on('$stateChangeSuccess', function () \{\
        console.log('done');\
        $rootScope.$broadcast('loading:hide');\
    \});\
\})\
\
.config(function($stateProvider, $urlRouterProvider) \{\
  $stateProvider\
      .state('app', \{\
      url: '/app',\
      abstract: true,\
      templateUrl: 'templates/sidebar.html',\
      controller: 'AppCtrl'\
  \})\
      .state('app.home', \{\
      url: '/home',\
      views: \{\
          'mainContent': \{\
              templateUrl: 'templates/home.html',\
              controller: 'IndexController',\
              resolve:\{\
                  leader:['corporateFactory',function(corporateFactory)\{\
                      return corporateFactory.get(\{id:3\});\
                  \}],\
                  dish:['menuFactory',function(menuFactory)\{\
                      return menuFactory.get(\{id:0\});\
                  \}],\
                  promotion:['promotionFactory',function(promotionFactory)\{\
                      return promotionFactory.get(\{id:0\});\
                  \}]\
              \}\
          \}\
      \}\
  \}\
            )\
      .state('app.aboutus', \{\
          url: '/aboutus',\
          views: \{\
            'mainContent': \{\
              templateUrl: 'templates/aboutus.html',\
                controller:'AboutController',\
                resolve:\{\
                    leaders:['corporateFactory',function(corporateFactory)\{\
                        return corporateFactory.query();\
                    \}\
                            ] \
                \}\
            \}\
          \}\
        \})\
      .state('app.favorites', \{\
          url: '/favorites',\
          views: \{\
              'mainContent': \{\
                  templateUrl: 'templates/favorites.html',\
                  controller:'FavoritesController',\
                  resolve: \{\
                      dishes:  ['menuFactory', function(menuFactory)\{\
                          return menuFactory.query();\
                      \}],\
                      favorites: ['favoriteFactory', function(favoriteFactory) \{\
                          return favoriteFactory.getFavorites();\
                      \}]\
                  \}\
              \}\
          \}\
  \})\
      .state('app.dishdetails', \{\
          url: '/menu/:id',\
          views: \{\
              'mainContent': \{\
                  templateUrl: 'templates/dishdetail.html',\
                  controller: 'DishDetailController',\
                  resolve: \{\
                      dish: ['$stateParams','menuFactory', function($stateParams, menuFactory)\{\
                          return menuFactory.get(\{id:parseInt($stateParams.id, 10)\});\
                      \}]\
                  \}\
              \}\
          \}\
      \})\
      .state('app.contactus', \{\
      url: '/contactus',\
      views: \{\
        'mainContent': \{\
          templateUrl: 'templates/contactus.html'\
        \}\
      \}\
    \})\
      .state('app.menu', \{\
      url: '/menu',\
      views: \{\
        'mainContent': \{\
          templateUrl: 'templates/menu.html',\
          controller: 'MenuController',\
            resolve:\{\
                dishes:['menuFactory',function(menuFactory)\{\
                    return menuFactory.query();\
                \}]\
            \}\
        \}\
      \}\
    \})\
  ;\
\
  // if none of the above states are matched, use this as the fallback\
  $urlRouterProvider.otherwise('/app/home');\
\
\
\});\
}