/// <reference path="../../../typings/tsd.d.ts" />
import {IDataAccessService} from '../../common/common-interfaces';

import modalController from './create-modal/create-modal.controller';
import modalTemplate from './create-modal/create-modal.template.html!text';

export default class ManagerController {
	
	public characters = [];
	public selected = [];
	public viewDeleted = false;
	
	static $inject = ['DataAccessService', '$mdToast', '$mdDialog', '$scope'];
	
	constructor(private DataAccessService: IDataAccessService, private $mdToast, private $mdDialog, $scope) {
		this.getCharacters();
	}
	
	getCharacters() {
		return this.DataAccessService.getCharacterResource().getAll().$promise.then(
			(response) => {
				this.characters = response;
			},
			(err) => {this.error(err)});
	}
	
	deleteSelected(selected){
		for(var character of selected){
			this.deleteCharacter(character.Name)
		}
	}
	
	deleteCharacter(characterName){
		return this.DataAccessService.getCharacterResource().deleteCharacter({key:characterName}).$promise.then(
			(response) => {

			},
			(err) => {this.error(err)});
	}
	
	toggleShowDeleted(){
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