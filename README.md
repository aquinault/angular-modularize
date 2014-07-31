angular-modularize
==================

How to modularize an angularJS app for an enterprise whith sub-module


app
    nonsense
        nonsense.module.js
        foo.ctrl.js
        bar.ctrl.js
        baz.filter.js
    apparel
        apparel.module.js
        hat.filter.js
        pants.service.js
    sounds
        sounds.module.js
        arf.service.js
        oink.html
        moo.directive.js
    people
        people.module.js
        bob.directive.js
        pat.html
    myapp.module.js


In each of these sub-modules:

angular.module('myApp.myModule');


angular.module('myApp', [
   'myApp.nonsense', 
   'myApp.apparel', 
   'myApp.sounds', 
   'myApp.people']);