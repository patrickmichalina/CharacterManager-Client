/// <reference path="../../../typings/tsd.d.ts" />
import {IDataAccessService} from '../../common/common-interfaces';

export default class ManagerController {
	
	public characters = [];
	
	static $inject = ['DataAccessService', '$mdToast'];
	
	constructor(private DataAccessService: IDataAccessService, private $mdToast) {
		this.getCharacters();
	}
	
	getCharacters() {
		return this.DataAccessService.getCharacterResource().getAll().$promise.then(
			(response) => {
				this.characters = response;
			},
			(err) => {this.error(err)});
	}
	
	error(error) {
		this.$mdToast.show(this.$mdToast.simple().content('There was an error connecting to the server'));
	}
}