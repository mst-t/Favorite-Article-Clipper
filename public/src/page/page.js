/**
 * FavoriiPage class
 * @class
 * @description
 * Mange each page title.
 */
class FavoriiPage {
    constructor(favoriiService) {
        this.showSummary = false;
        this.favoriiService = favoriiService;
    }

    onShowSummary() {
        this.showSummary = !this.showSummary;
    }

    onDeletePage(index) {
        this.favoriiService.deletePage(index);
    }
}

myApp.directive('favoriiPage', () => {
    return {
        restrict: "E",
        scope: {
            page: "=",
            index: "="
        },
        templateUrl: 'page/page.html',
        transclude: false,
        controller: FavoriiPage,
        controllerAs: "$ctrl",
        link: () => {
            // do nothing so far
        }
    };
});
