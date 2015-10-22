/// <reference path="../typings/tsd.d.ts" />
import controller from './app-controller';
import html from './app-template';
import template from './app-template.html!text';
import './app-style.scss!';

class AppDirective implements ng.IDirective {	
    template = template;
	controller = controller;
	restrict = 'E';
	controllerAs = 'vm';
	bindToController = true;
}

export {AppDirective}