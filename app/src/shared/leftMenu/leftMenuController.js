/**
 * Created by KuroVM on 17/03/2015.
 */
(function(){
    'use strict';

    angular
        .module('leftMenu')
        .controller('leftMenuController', leftMenuController);

    // INJECTION
    leftMenuController.$inject = ['$mdSidenav', 'leftMenuService', 'authenticationService'];

    // CONTROLLER
    function leftMenuController($mdSidenav, leftMenuService, authenticationService){
        var self = this;
        self.menuList = getMenuList();
        self.toggleMenu = toggleMenu;        
        self.logoutUser = logoutUser;

        // Functions
        function toggleMenu(){
          $mdSidenav('sideNavLeft').toggle();
        };

        function getMenuList() {
            return leftMenuService.getMenuList();
        };

        function logoutUser() {
            authenticationService.logout();
            console.log("Logged out");
        };

    }
})();
