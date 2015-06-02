/**
 * Created by KuroVM on 17/03/2015.
 */
(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular
        .module('authentication', ['ngMaterial', 'ui.router', 'firebaseInfo'])
        .config(authenticationRoute)

    // Injection
    authenticationRoute.$inject=["$stateProvider"];    

    function authenticationRoute($stateProvider) {

        // Setting up states
        $stateProvider
            // State login
            .state('authentication', {
                url: "/authentication",
                templateUrl: "src/authentication/authentication.html",
                controller : "authenticationController",
                controllerAs : "authentication"
            });
    };
})();
