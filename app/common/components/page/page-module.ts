/// <reference path="../../../../typings/tsd.d.ts" />

import {module} from 'angular';
import {PageController} from './page-controller';

let PageModule = module('page', [])
    .controller('PageController', PageController);

export {PageModule};