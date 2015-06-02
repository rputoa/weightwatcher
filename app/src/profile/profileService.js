(function () {
    'use strict';

    angular.module('profile')

        .factory('profileService', profileService);

        // Injection
        profileService.$inject=['authenticationService', '$firebaseObject', 'FIREBASE_URL'];

        // Factory
        function profileService(authenticationService, $firebaseObject, FIREBASE_URL) {

            var service = {
                getUserProfile : getUserProfile,
                saveUserProfile : saveUserProfile                
            };

            return service;


            /////////// Functions

            /* Return userProfile */
            function getUserProfile() {
                var ref = new Firebase(FIREBASE_URL);
                    var userProfile = $firebaseObject(ref.child('profiles').child(authenticationService.getUserAuthData().uid));
                    return userProfile;
            };

            /* Save userProfile */
            function saveUserProfile(userData, surname, name, gender, birthDate) {
                var userProfile = $firebaseObject(ref.child('profiles').child(userData.uid));
                    userProfile.name = name;
                    userProfile.surname = surname;
                    userProfile.gender = gender;
                    userProfile.birthDate = birthDate.getTime();
                    console.log(userProfile);
                    userProfile.$save();
            };

        }


})();
