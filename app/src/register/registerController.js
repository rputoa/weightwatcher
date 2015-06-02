/**
 * Created by KuroVM on 17/03/2015.
 */
(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular
        .module('register')
        .controller('registerController', registerController);

    // Injection
    registerController.$inject = ['registerService'];

    // Controller
    function registerController(registerService) {
        var self = this;
        self.mail = null;
        self.password = null;
        self.confirmPassword = null;
        self.firstName = null;
        self.lastName = null;
        self.gender = null;
        self.birthDate = null;
        self.createUser = createUser;

        // Functions
        function createUser(isValid) {
             if(isValid){               
                registerService.registerUser(self.mail, self.password, self.firstName, self.lastName, self.gender, self.birthDate);
            }
        };
    }
})();



