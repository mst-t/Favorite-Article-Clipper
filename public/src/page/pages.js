/**
 * FavoriiPages class
 * @class
 * @description
 * Mange all the pages.
 */
class FavoriiPages {
    constructor(favoriiService) {
        this.favoriiService = favoriiService;
        this.pages = this.favoriiService.pages;
    }
}

myApp.component("favoriiPages", {
    templateUrl: 'page/pages.html',
    controller: FavoriiPages
});
