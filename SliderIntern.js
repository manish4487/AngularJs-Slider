var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })

    .when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'signupController'
    })

    .when('/addContacts', {
        templateUrl: 'templates/addContacts.html',
        controller: 'addContactsController'
    })

    .when('/create_lead', {
        templateUrl: 'templates/create_lead.html',
        controller: 'create_leadController'
    })

    .when('/lead_location', {
        templateUrl: 'templates/lead_location.html',
        controller: 'lead_locationController'
    });
});


scotchApp.controller('homeController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('signupController', function($scope) {
    $scope.message = 'Look! I am signup page.';
});

scotchApp.controller('addContactsController', function($scope) {
    $scope.message = 'Addcontact This is just a demo.';
});

scotchApp.controller('create_leadController', function($scope) {
    $scope.message = 'Createlead Demo.';
});

scotchApp.controller('lead_locationController', function($scope) {
    $scope.message = 'leadlocation.';
});