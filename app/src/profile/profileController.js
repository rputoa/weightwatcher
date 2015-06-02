/**
 * Created by KuroVM on 04/04/2015.
 */
(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular
        .module('profile')
        .controller('profileController', profileController);

    // Injection
    profileController.$inject=['profileService'];

    // Controller
    function profileController(profileService) {
        var self = this;
        self.userProfile = getUserProfile();

        // Functions
        function getUserProfile() {
            return profileService.getUserProfile();
        }
        
    }
})();

