/**
 * Favorii Service class
 * @class
 * @description
 * Mange page data and update localstorage.
 */
class FavoriiService {
    constructor() {
      this.pages = [];
        let pages = localStorage.getItem("pages");
        pages = JSON.parse(pages);
        for(let page in pages) {
            this.pages.push(pages[page])
        }
    }

    get getTitles() {
        return this.pages;
    }

    addPage(page) {
        this.pages.push(page);
        localStorage.setItem("pages", JSON.stringify(this.pages));
    }

    deletePage(index) {
         this.pages.splice(index, 1);
         localStorage.setItem("pages", JSON.stringify(this.pages));
    }
}

myApp.service('favoriiService', FavoriiService);
