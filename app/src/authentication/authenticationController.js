/**
 * Created by KuroVM on 17/03/2015.
 */
(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular
        .module('authentication')
        .controller('authenticationController',authenticationController);

    authenticationController.$inject = ["authenticationService","$state"];

    function authenticationController(authenticationService, $state) {
        var self = this;
        self.mail = null;
        self.password = null;        
        self.logoutUser = logoutUser;
        self.logUserWithPassword = logUserWithPassword;
        self.nextState = getNextState();

        // Functions
        function logoutUser() {
            console.log("Test logout");
            authenticationService.logout();
            $state.go("profil");
        };

        function logUserWithPassword() {
            authenticationService.logUserWithMailandPassword(self.mail, self.password);
        };

        function getNextState() {
           return authenticationService.getNextState();
        }
    }
})();



