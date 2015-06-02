/**
 * Created by KuroVM on 17/03/2015.
 */
(function(){
    'use strict';
    angular
        /*
        Define module use by app
        - ngMaterial : Angular Design Material
        - menu : Module used for sideBar Menu
         */
        .module('app')
        /* Redirection si l'utilisateur n'est pas loger */
        .run(['$rootScope', '$state', 'authenticationService', redirectAuth])
        /*
         Configuration for routage service.         
         */
        .config(appRoute);

        function redirectAuth($rootScope, $state, authenticationService) {
           
           $rootScope.$on('$stateChangeStart'
            , function(event, toState, toParams, fromState, fromParams) {
                   // AuthenticationRequired si :
                   // - toState.data exist
                   // - toState.data.requiresLogin = true
                   // - Utilisateur non authentifier
                var isAuthenticationRequired =  toState.data && toState.data.requiresLogin && !authenticationService.isUserAuthenticated();

                if(isAuthenticationRequired){
                  event.preventDefault();
                  // Set the next state 
                  authenticationService.setNextState(toState.name);
                  console.log(toState);
                  // Go to login
                  $state.go('authentication');
            }
          });
        }

        function appRoute($stateProvider, $urlRouterProvider){

            // For any unmatched url, redirect do /data
            $urlRouterProvider.otherwise("/authentication")

            // Setting up states
            $stateProvider
                // State Graph
                .state('graph', {
                    url : "/graph",
                    templateUrl : "src/graph/graph.html",
                    data : {requiresLogin : true}
                })
                // State data
                .state('data', {
                    url : "/data",
                    templateUrl : "src/data/data.html",
                    data : {requiresLogin : true}
                })
                // State Graph
                .state('addData', {
                    url : "/addData",
                    templateUrl : "src/graph/graph.html"
                })
        }
})();
    	

   