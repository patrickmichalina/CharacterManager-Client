/// <reference path="../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageModule} from './page/page-module';

let ComponentsModule = module('app.common.components', [
	PageModule.name
]);

export {ComponentsModule};