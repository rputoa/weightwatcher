/**
 * Created by KuroVM on 17/03/2015.
 */
(function () {
'use strict';


angular.module('authentication')

    /*
    * LoginService
    */
    .factory('authenticationService', authenticationService);

    // Inject in authenticationService
    authenticationService.$inject = ['FIREBASE_AUTH'];

    function authenticationService(FIREBASE_AUTH){

        // Sauvegarde des données d'authentification de l'utilisateur
        var authObj = FIREBASE_AUTH;
        // Save the next state
        var nextState = "data";
    	
    	var service = {
            isUserAuthenticated : isUserAuthenticated,
            getUserAuthData : getUserAuthData,
    		logUserWithMailandPassword : logUserWithMailandPassword,
            logout : logout,
            setNextState : setNextState,
            getNextState : getNextState
    	};

    	return service;

        ////////////// functions

        /* 
        Return if user is authenticated
        - user authenticated -> true
        - else -> false
        */
        function isUserAuthenticated() {
            var authStatus = authObj.$getAuth();
                console.log(authStatus);
                if(authStatus){
                    return true;
                }else{
                    return false;
                }
        };

        /*
        Return user authentification data
        */
        function getUserAuthData() {
            return authObj.$getAuth();
        };

        /*
        Log an user using mail and password
        */
        function logUserWithMailandPassword(email, password) {
            authObj.$authWithPassword({
                    email : email,
                    password : password
                }).then(function(authData){                   
                    console.log("Authenticated as : ", authData.uid);                    
                }).catch(function(error) {
                    console.error("Authentication failed :", error);
                })
        };

        /* Logout authenticated user */
        function logout() {
            authObj.$unauth();   
        };

         /* Set the navigation page */
        function setNextState(state) {
            nextState = state;
        };

        /* Get the navigation page */
        function getNextState() {
            console.log(nextState);
            return nextState;
        };

    }
})();

