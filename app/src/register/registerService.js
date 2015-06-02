/**
 * Created by KuroVM on 17/03/2015.
 */
(function () {
'use strict';

angular.module('register')

    .factory('registerService',registerService);

    // INJECTION
    registerService.$inject = ['$firebaseAuth', '$firebaseObject', 'FIREBASE_URL'];

    // FACTORY
    function registerService($firebaseAuth, $firebaseObject, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);

        var service = {
            registerUser : registerUser,
            addUserData : addUserData
        };

        return service;

        // Functions
        /* Register a new user */
        function registerUser(email, password, surname, name, gender, birthDate){
            var auth = $firebaseAuth(ref);
            auth.$createUser({
                email: email,
                password: password
            }).then(function(userData){
                service.addUserData(userData, surname, name, gender, birthDate);
            }).catch(function (error) {
                    console.log("Erreur lors de la création de l'utilisateur : " + error);
                });
        };

        /* Add data to a user */
        function addUserData(userData, surname, name, gender, birthDate){
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

