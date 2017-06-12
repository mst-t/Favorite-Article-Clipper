/**
 * FavoriiInput class
 * @class
 * @description
 * Submit an url entered by an user and get the title and summary
 * by calling ajax method.
 */
class FavoriiInput {
    constructor(favoriiService, favoriiPageUrl) {
        this.favoriiService = favoriiService;
        this.favoriiPageUrl = favoriiPageUrl;
        this.url = '';

    }
    submit() {
        this.favoriiPageUrl(this.url)
            .then( (res) => {
                let page = res.data;
                let summary = '';

                page.url = this.url;
                page.summary.forEach((val) => {
                  summary += ' ' + val;
                });
                page.summary = summary;
                this.onAddPage(page);
                this.url = '';
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    onAddPage(page) {
        this.favoriiService.addPage(page);
    }
}

myApp.component("favoriiInput", {
    templateUrl: 'input/input.html',
    controller: FavoriiInput
});
