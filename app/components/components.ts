/// <reference path="../../typings/tsd.d.ts" />
import {module} from 'angular';
import 'angular-ui-router';
import {ManagerModule} from './manager/manager-module';

let ComponentModule: ng.IModule = 
	module('app.components', [
		ManagerModule.name,
		'ui.router'
	]);

export {ComponentModule};