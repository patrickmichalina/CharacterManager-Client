/// <reference path="../typings/tsd.d.ts" />
import {IPageTitleService, IPageMetaService, IDataAccessService} from './common/common-interfaces';

function AppRoutes ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            template: '<app layout-fill layout="row"></app>'
        })

    $urlRouterProvider.otherwise('manager');
}

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export {AppRoutes}