/// <reference path="../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageTitleServiceModule} from './page-title-service/page-title-service-module';
import {PageMetaServiceModule} from './page-meta-service/page-meta-service-module';
import {DataAccessServiceModule} from './data-access-service/data-access-service-module';

let ServicesModule: ng.IModule = 
	module('app.common.services', [
		PageTitleServiceModule.name,
		PageMetaServiceModule.name,
		DataAccessServiceModule.name
	]);

export {ServicesModule};