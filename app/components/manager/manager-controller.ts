/// <reference path="../../../typings/tsd.d.ts" />
import {IDataAccessService} from '../../common/common-interfaces';

import modalController from './create-modal/create-modal-controller';
import modalTemplate from './create-modal/create-modal-template.html!text';

export default class ManagerController {

	public characters = [];
	public selected = [];
	public viewDeleted = false;

	static $inject = ['DataAccessService', '$mdToast', '$mdDialog'];

	constructor(private DataAccessService: IDataAccessService, private $mdToast, private $mdDialog) {
		this.getCharacters();
	}

	getCharacters() {
		return this.DataAccessService.getCharacterResource().getAll().$promise.then(
			(response) => {
				this.characters = response;
			},
			(err) => { this.error(err) });
	}

	deleteSelected(selected) {
		for (var character of selected) {
			this.deleteCharacter(character.Name)
		}
		this.selected = [];
	}

	deleteCharacter(characterName) {
		return this.DataAccessService.getCharacterResource().deleteCharacter({ key: characterName }).$promise.then(
			(response) => {
				let modifiedCharacter = this.characters.find(function(d) {
					return d.Name === characterName;
				});
				modifiedCharacter.IsDeleted = true;
			},
			(err) => { this.error(err) });
	}
	
	getDisabledCount(){
		let count = 0;
		for(var character of this.characters){
			if(character.IsDeleted === true) count++;
		}
		
		return count;
	}

	restoreCharacter(characterName) {
		return this.DataAccessService.getCharacterResource().deleteCharacter({ key: characterName, restore: true }).$promise.then(
			(response) => {
				let modifiedCharacter = this.characters.find(function(d) {
					return d.Name === characterName;
				});
				modifiedCharacter.IsDeleted = false;
			},
			(err) => { this.error(err) });
	}

	restoreSelected(selected) {
		for (var character of selected) {
			this.restoreCharacter(character.Name)
		}
		this.toggleShowDeleted();
	}

	toggleShowDeleted() {
		this.selected = [];
		this.viewDeleted = !this.viewDeleted;
	}



	showCreateCharacterDialog(ev) {


		this.$mdDialog.show({
			parent: angular.element(document.body),
			controller: modalController,
			template: modalTemplate,
			targetEvent: ev,
			clickOutsideToClose: true
		})
			.then(function(answer) {

			}, function() {

			});

	}



	showCreatedCharacterAlert() {
		this.$mdToast.show(this.$mdToast.simple().content('Your character was created! Have fun :)'));
	}

	error(error) {
		this.$mdToast.show(this.$mdToast.simple().content(error.data.Message));
	}
}