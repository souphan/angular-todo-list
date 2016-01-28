 (function() {
     function LandingCtrl() {
         this.heroTitle = "Turn the Music Up!";
     }
 
     angular
         .module('TodoApp')
         .controller('LandingCtrl', LandingCtrl);
 })();