/// <reference path="../../../../typings/tsd.d.ts" />
import {
    IDataAccessService 
    } from './data-access-service-interface';

class DataAccessService implements IDataAccessService {
    private baseUrl: string;
	static $inject = ["$resource"];
    
    constructor(private $resource: ng.resource.IResourceService) 
    {
        this.baseUrl = 'https://character-manager.azurewebsites.net/api/';
    }
	
	getCharacterResource() {
        let resourceUrl = this.baseUrl + 'Characters';
		return this.$resource('', {},
        {
            'getAll': { method: 'GET', url: resourceUrl, isArray: true },
            'create': { method: 'POST', url: resourceUrl },
            'deleteCharacter': { method: 'DELETE', params: { key: '@key' }, url: resourceUrl + '?name=:key' },
            'restoreCharacter': { method: 'DELETE', params: { key: '@key', restore: '@restore' }, url: resourceUrl + '?name=:key,restore=:restore' }
		});	
	}
    
    getRaceResource() {
        let resourceUrl = this.baseUrl + 'Races';
		return this.$resource('', {},
        {
            'getAll': { method: 'GET', url: resourceUrl, isArray: true },
		});	
	}
    
    getClassResource() {
        let resourceUrl = this.baseUrl + 'Classes';
		return this.$resource('', {},
        {
            'getAll': { method: 'GET', url: resourceUrl, isArray: true },
		});	
	}
    
    getFactionResource() {
        let resourceUrl = this.baseUrl + 'Factions';
		return this.$resource('', {},
        {
            'getAll': { method: 'GET', url: resourceUrl, isArray: true },
		});	
	}
}

export {DataAccessService}