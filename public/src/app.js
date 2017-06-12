const myApp = angular.module('favoriiApp', []);

// Check the validity of localstorage.
if(('localStorage' in window) && (window.localStorage !== null)) {
    console.log("App is running.");
} else {
    alert("LocalStorage does not work. This app requires the feature.");
}
