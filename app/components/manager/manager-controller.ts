/// <reference path="../../../typings/tsd.d.ts" />
import {IDataAccessService} from '../../common/common-interfaces';
import modalController from './create-modal/create-modal-controller';
import modalTemplate from './create-modal/create-modal-template.html!text';

export default class ManagerController {

	public characters = [];
	public selected = [];
	public selectedForRestore = [];
	public factions = [];
	public races = [];
	public classes = [];
	public viewDeleted = false;
	private test = this.$mdDialog.hide;

	static $inject = ['DataAccessService', '$mdToast', '$mdDialog', '$scope', '$state', '$stateParams'];

	resetSelected() {
		this.selected = [];
		this.selectedForRestore = [];
	}

	constructor(private DataAccessService: IDataAccessService, private $mdToast, private $mdDialog, private $scope, private $state, private $stateParams) {
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
		this.resetSelected();
		this.showDeletedCharacterAlert(selected.length);
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

	getDisabledCount() {
		let count = 0;
		for (var character of this.characters) {
			if (character.IsDeleted === true) count++;
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
		this.showRestoredCharacterAlert(selected.length);
	}

	toggleShowDeleted() {
		this.selected = [];
		this.selectedForRestore = [];
		this.viewDeleted = !this.viewDeleted;
	}

	onCreated(response) {
		var test = this;
		//debugger;
    }

	showDeletedCharacterAlert(numDeleted) {
		this.$mdToast.show(this.$mdToast.simple().content('Deleted ' + numDeleted + ' characters'));
	}

	showRestoredCharacterAlert(numRestored) {
		this.$mdToast.show(this.$mdToast.simple().content('Deleted ' + numRestored + ' characters'));
	}

	showCreatedCharacterAlert() {
		this.$mdToast.show(this.$mdToast.simple().content('Your character was created! Have fun :)'));
	}

	error(error) {
		this.$mdToast.show(this.$mdToast.simple().content(error.data.Message));
	}
	
	///////////////////// MODAL
	
	showCreateCharacterDialog(ev) {
		this.$mdDialog.show({
			targetEvent: ev,
			locals: { parent: this },
			controller: angular.noop,
			controllerAs: 'ctrl',
			bindToController: true,
			template: modalTemplate
		})
			.then(this.onCreated, this.onCreated);
	}

	getFactions = () => {
		return this.DataAccessService.getFactionResource().getAll().$promise.then(
			(response) => {
				this.factions = response;
			},
			(err) => { this.error(err) });
	}

	getRaces = () => {
		return this.DataAccessService.getRaceResource().getAll().$promise.then(
			(response) => {
				this.races = response;
			},
			(err) => { this.error(err) });
	}

	getClasses = () => {
		return this.DataAccessService.getClassResource().getAll().$promise.then(
			(response) => {
				this.classes = response;
			},
			(err) => { this.error(err) });
	}

	hide = function() {
		this.$mdDialog.hide();
	};

	cancel = function() {
		this.$mdDialog.cancel();
	};

	create = function(character) {
		return this.DataAccessService.getCharacterResource().create(character).$promise.then(
			(response) => {
				this.characters.push(character);
				this.hide();	
				this.$state.transitionTo(this.$state.current, this.$stateParams, {
    				reload: true,
    				inherit: false,
    				notify: true
				});
			},
			(err) => { this.errorW(err) });
	}

	errorW = (error) => {
		this.$mdToast.show(this.$mdToast.simple().content(error.data.Message));
	}
}