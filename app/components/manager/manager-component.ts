import controller from './manager-controller';
import html from './manager-template';
import template from './manager-template.html!text';
import './manager-style.scss!';

export function ManagerComponent() {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: { },
		bindToController: true
	};
}