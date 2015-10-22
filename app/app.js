import {module, element} from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-messages';
// import 'material-design-iconic-font/dist/css/material-design-iconic-font.css!';
// import {AppDirective} from './app-directive';
// import {AppRoutes} from './app-routes';

let Module = module("app", [
	'ui.router'
    // 'ngMaterial',
    // 'ngMessages'
]);

// configure
// Module.directive("app", () => new AppDirective());
// Module.config(AppRoutes);
// Module.config(LocationProviderConfig);
// Module.config(ExceptionHandlerConfig);
// Module.config(IconProviderConfig);
// Module.config(ThemingProviderConfig);
// Module.config((['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//     cfpLoadingBarProvider.includeSpinner = false;
//   }]));



// bootstrap angular
element(document).ready(()=> {
    angular.bootstrap(document, [Module.name]), {
        strictDi: true
    }
});