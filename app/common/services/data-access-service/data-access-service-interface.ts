import {ICharacter} from '../../models/model-interfaces';

interface ICharacterResource extends ng.resource.IResource<ICharacter> { }

interface IDataAccessService {
	getCharacterResource(): ng.resource.IResourceClass<ICharacterResource>;
}

export {IDataAccessService, ICharacterResource}