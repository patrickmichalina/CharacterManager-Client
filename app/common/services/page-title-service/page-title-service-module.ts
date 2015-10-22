/// <reference path="../../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageTitleService} from './page-title-service';

let PageTitleServiceModule: ng.IModule = 
    module('PageTitleService', [])
        .service('PageTitleService', PageTitleService);

export {PageTitleServiceModule};