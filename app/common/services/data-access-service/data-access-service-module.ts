/// <reference path="../../../../typings/tsd.d.ts" />
import {module} from 'angular';
import 'angular-resource';
import {DataAccessService} from './data-access-service';

let DataAccessServiceModule: ng.IModule = 
    module('DataAccessService', [
        'ngResource'
    ]).service('DataAccessService', DataAccessService);

export {DataAccessServiceModule};