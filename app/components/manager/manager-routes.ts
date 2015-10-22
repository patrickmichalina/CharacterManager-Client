/// <reference path="../../../typings/tsd.d.ts" />
import controller from './manager-controller';
import {IPageTitleService, IPageMetaService} from '../../common/common-interfaces';

routes.$inject = ['$stateProvider'];

function routes($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
        .state('app.manager', {
            url: 'manager',
            views: {
                'content@app': {
                    template: '<manager></manager>'
                }
            },
            resolve: {
                title: ['PageTitleService', function(PageTitleService: IPageTitleService) {
                    PageTitleService.setTitle('World of Warcraft Character Manager');
                }],
                meta: ['PageMetaService', function(PageMetaService: IPageMetaService) {
                    PageMetaService.reset();                    
                    PageMetaService.setMetaDescription('A pretend World of Warcraft Character manager');
                    PageMetaService.setMetaKeywords(['wow', 'characters']);
                }]
            }
        });
}

export {routes}