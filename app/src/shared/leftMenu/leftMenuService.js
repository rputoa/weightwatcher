/**
 * Created by KuroVM on 17/03/2015.
 */
(function(){
    'use strict';

    angular
        .module('leftMenu')
        .factory('leftMenuService', [leftMenuService]);

    // Fonction service du leftMenuService
    function leftMenuService(){
        var nextState = null;

        // Object to return when leftMenuService is called
        var service = {
            getMenuList : getMenuList           
        };

        return service;

        /*
        Return the list of menu items in the left Menu
        - To add a menu item in the left menu, add it here
         */
        function getMenuList() {
            var menuList = [];
            menuList.push(new MenuItem('phone','Graph','graph'));
            menuList.push(new MenuItem('twitter','Data','data'));
            menuList.push(new MenuItem('hangouts','Add Data','addData'));
            menuList.push(new MenuItem('google_plus','Profile','profile'));
            // Todo remove login when routing is ok
            menuList.push(new MenuItem('menu','Login (to remove)', 'authentication'));

            // Todo remove Register when routing is ok
            menuList.push(new MenuItem('menu','Register (to remove)', 'register'));
            return menuList;
        };       
    }

    
})();
