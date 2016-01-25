 (function() {
     function LandingCtrl() {
         this.heroTitle = "Turn the Music Up!";
     }
 
     angular
         .module('keodoToDo')
         .controller('LandingCtrl', LandingCtrl);
 })();