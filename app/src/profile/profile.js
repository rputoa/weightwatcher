/**
 * Created by KuroVM on 04/04/2015.
 */
(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular
        .module('profile', ['ngMaterial', 'ui.router','firebase', 'firebaseInfo', 'authentication'])
        .config(profilRoute)

    // Injection
    profilRoute.$inject = ["$stateProvider"];

    // Route function
    function profilRoute($stateProvider) {

        // Setting up states
        $stateProvider
            // State register
            .state('profile', {
                url: "/profile",
                templateUrl: "src/profile/profile.html",
                controller : "profileController",
                controllerAs : "profile",
                data : {requiresLogin : true}
            })
    };
})();
