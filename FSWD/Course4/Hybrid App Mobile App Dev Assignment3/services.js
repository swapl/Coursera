{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 'use strict';\
\
angular.module('conFusion.services',['ngResource'])\
        .constant("baseURL","http://localhost:3000/")\
        .factory('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) \{\
    \
          \
                    \
    return $resource(baseURL+"dishes/:id",null,  \{\
        'update':\{\
            method:'PUT' \
        \}\
    \});\
                    \
        \}])\
\
.factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) \{\
    \
            return $resource(baseURL + "promotions/:id");\
\
\}])\
    \
            \
\
        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) \{\
    \
    \
            return $resource(baseURL+"leadership/:id");\
    \
        \}])\
\
\
        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) \{\
    \
    \
            return $resource(baseURL+"feedback/:id");\
    \
        \}])\
.factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) \{\
    var favFac = \{\};\
    var favorites = [];\
\
    favFac.addToFavorites = function (index) \{\
        for (var i = 0; i < favorites.length; i++) \{\
            if (favorites[i].id == index)\
                return;\
        \}\
        favorites.push(\{id: index\});\
        \
         $localStorage.storeObject('favorites', favorites);\
    \};\
    \
    favFac.deleteFromFavorites = function (index) \{\
        for (var i = 0; i < favorites.length; i++) \{\
            if (favorites[i].id == index) \{\
                favorites.splice(i, 1);\
            \}\
        \}\
        \
         $localStorage.storeObject('favorites', favorites);\
    \}\
    \
    favFac.getFavorites = function () \{\
        \
        return favorites;\
   \};\
\
    return favFac;\
    \
    \
    \}])\
\
.factory('$localStorage', ['$window', function($window) \{\
  return \{\
    store: function(key, value) \{\
      $window.localStorage[key] = value;\
    \},\
    get: function(key, defaultValue) \{\
      return $window.localStorage[key] || defaultValue;\
    \},\
    storeObject: function(key, value) \{\
      $window.localStorage[key] = JSON.stringify(value);\
    \},\
    getObject: function(key,defaultValue) \{\
      return JSON.parse($window.localStorage[key] || defaultValue);\
    \}\
  \}\
\}])\
\
;\
}