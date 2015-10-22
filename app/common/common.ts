/// <reference path="../../typings/tsd.d.ts" />
import {module} from 'angular';
import {ServicesModule} from './services/services';
import {ComponentsModule} from './components/components';

let CommonModule = module('app.common', [
	ServicesModule.name,
	ComponentsModule.name
]);

export {CommonModule};