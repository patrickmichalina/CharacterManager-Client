/// <reference path="../../../typings/tsd.d.ts" />
import {module} from 'angular';
import 'angular-ui-router';
import 'angular-material';
import {routes}  from './manager-routes';
import {ManagerComponent} from './manager-component';
import {CommonModule} from '../../common/common';

let ManagerModule: ng.IModule = 
    module('manager', [
        'ui.router',
        'ngMaterial'
]);

ManagerModule.config(routes)
  .directive('manager', ManagerComponent);

export {ManagerModule};