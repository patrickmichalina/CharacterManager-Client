import {IPageTitleService, IPageMetaService} from '../../common-interfaces';

class PageController {
    
    public static $inject = ['PageTitleService', 'PageMetaService'];

    constructor(private PageTitleService: IPageTitleService, private PageMetaService: IPageMetaService) { }

    getTitle() {
        return this.PageTitleService.getTitle();
    }

    getMetaKeywords() {
        return this.PageMetaService.getMetaKeywords();
    }

    getMetaDescription() {
        return this.PageMetaService.getMetaDescription();
    }
}

export {PageController}