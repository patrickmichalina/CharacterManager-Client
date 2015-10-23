//import {ICharacter} from '../../models/model-interfaces';

//interface ICharacterResource extends ng.resource.IResource<ICharacter> { }

interface IDataAccessService {
	getCharacterResource();
	getRaceResource();
	getClassResource();
	getFactionResource();
}

export {IDataAccessService}