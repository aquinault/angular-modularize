angular-modularize
==================

How to modularize an angularJS app for an enterprise whith sub-module


app  
|____nonsense  
|____|____nonsense.module.js  
|____|____foo.ctrl.js  
|____|____bar.ctrl.js  
|____|____baz.filter.js  
|____apparel  
| |____apparel.module.js  
| |____hat.filter.js  
| |____pants.service.js  
|____sounds  
| |____sounds.module.js  
| |____arf.service.js  
| |____oink.html  
| |____moo.directive.js  
|____people  
| |____people.module.js  
| |____bob.directive.js  
| |____pat.html  
|____myapp.module.js  

In each of these sub-modules:

angular.module('myApp.myModule');


angular.module('myApp', [
   'myApp.nonsense', 
   'myApp.apparel', 
   'myApp.sounds', 
   'myApp.people']);