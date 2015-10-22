/// <reference path="../../../../typings/tsd.d.ts" />
import {
    IDataAccessService, 
    ICharacterResource} from './data-access-service-interface';

class DataAccessService implements IDataAccessService {
    private baseUrl: string;
	static $inject = ["$resource"];
    
    constructor(private $resource: ng.resource.IResourceService) 
    {
        this.baseUrl = 'https://character-manager.azurewebsites.net/api/';
    }
	
	getCharacterResource(): ng.resource.IResourceClass<ICharacterResource> {
        let resourceUrl = this.baseUrl + 'Characters';
		return this.$resource('', {},
        {
            'getAll': { method: 'GET', url: resourceUrl, isArray: true },
            'create': { method: 'POST', url: resourceUrl },
            'patch': { method: 'PATCH', params: { key: '@key' }, url: resourceUrl + '/:key' },
            'deleteEvent': { method: 'DELETE', params: { key: '@key' }, url: resourceUrl + '/:key' }
		});	
	}
}

export {DataAccessService}