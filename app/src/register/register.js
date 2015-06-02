/**
 * Created by KuroVM on 17/03/2015.
 */
(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular
        .module('register', ['ngMaterial', 'ui.router','firebase', 'firebaseInfo'])
        .config(registerRoute)

    // Injection
    registerRoute.$inject=['$stateProvider'];

    // Route
    function registerRoute($stateProvider) {

        $stateProvider
            .state('register', {
                url: "/register",
                templateUrl: "src/register/register.html",
                controller : "registerController",
                controllerAs : "register"
            })
    };
})();
