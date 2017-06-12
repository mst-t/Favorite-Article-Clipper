/**
 * FavoriiPageUrl factory class
 * @class
 * @description
 * Execute "GET" to retrive the title and summary of the webpage.
 */
class FavoriiPageUrl {
    constructor($http) {
        return (newUrl) => ($http({
            "method": 'GET',
            "url": 'http://localhost:3000/api/',
            "params": {
              "url": newUrl
            }
        }));
    }
    static createFactory($http) {
        return new FavoriiPageUrl($http);
    }
}

myApp.factory('favoriiPageUrl', FavoriiPageUrl.createFactory);
