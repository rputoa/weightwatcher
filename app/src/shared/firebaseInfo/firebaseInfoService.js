/**
 * Created by KuroVM on 04/04/2015.
 */
(function () {
    'use strict';

    angular.module('firebaseInfo')

        // CONSTANT
        .factory('FIREBASE_URL', [function(){
            return "https://hn-weightwatcher.firebaseio.com";
        }])

        // FIREBASE_AUTH : Factory for firebase authentication
        .factory('FIREBASE_AUTH', firebaseAuth);

        // INJECTION
        firebaseAuth.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

        // FACTORY
        function firebaseAuth($firebaseAuth, FIREBASE_URL) {
            var ref = new Firebase(FIREBASE_URL);
            var auth = $firebaseAuth(ref);
            return auth;
        }


})();