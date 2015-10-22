/// <reference path="../typings/tsd.d.ts" />
import {module, element} from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-messages';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.css!';
import 'angular-loading-bar';
import 'angular-material-data-table'
import {AppDirective} from './app-directive';
import {AppRoutes} from './app-routes';
import {LocationProviderConfig, ExceptionHandlerConfig, IconProviderConfig, ThemingProviderConfig} from './config/config';
import {ComponentModule} from './components/components';
import {CommonModule} from './common/common';

let Module = module("app", [
	ComponentModule.name,
    CommonModule.name,
	'ui.router',
    'ngMaterial',
    'ngMessages',
    'angular-loading-bar',
    'md.data.table'
]);

// configure
Module.directive("app", () => new AppDirective());
Module.config(AppRoutes);
Module.config(LocationProviderConfig);
Module.config(ExceptionHandlerConfig);
Module.config(IconProviderConfig);
Module.config(ThemingProviderConfig);
Module.config((['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]));



// bootstrap angular
element(document).ready(()=> {
    angular.bootstrap(document, [Module.name]), {
        strictDi: true
    }
});