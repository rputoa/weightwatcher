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
        .module('app',['ngMaterial','ngMessages','leftMenu','ui.router','authentication','register', 'firebaseInfo', 'profile'])

        /*
         Configuration for icons service.
         Allow the use of icons in material design icon
         */
        .config(iconProvider);

        /*
        Define icons adress to use in md-icon
        */
        function iconProvider($mdIconProvider){
            // Register user avatar icons
            $mdIconProvider
                .defaultIconSet("./resources/img/svg/avatars.svg",128)
                .icon("menu"       , "./resources/img/svg/menu.svg"        , 24)
                .icon("mail"       , "./resources/img/svg/mail.svg"        , 24)
                .icon("share"      , "./resources/img/svg/share.svg"       , 24)
                .icon("google_plus", "./resources/img/svg/google_plus.svg" , 512)
                .icon("hangouts"   , "./resources/img/svg/hangouts.svg"    , 512)
                .icon("twitter"    , "./resources/img/svg/twitter.svg"     , 512)
                .icon("phone"      , "./resources/img/svg/phone.svg"       , 512);
        };
})();