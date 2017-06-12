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
            "url": 'YOUR_SERVER_URL',
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
