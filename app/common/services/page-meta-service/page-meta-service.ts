import {IPageMetaService} from './page-meta-service-interface'

class PageMetaService implements IPageMetaService {
    private _metaDescription: string;
    private _metaKeywords: string;
	
    constructor() { }
    
	getMetaDescription(): string {
		return this._metaDescription;
	}
	
    setMetaDescription(newMetaDescription: string): void {
		this._metaDescription = newMetaDescription;
	}
	
    getMetaKeywords(): string {
		return this._metaKeywords;
	}
	
    setMetaKeywords(newKeywords: Array<string>): void {
		for (var key in newKeywords) {
            if (this._metaKeywords === '') {
                this._metaKeywords += newKeywords[key];
            } else {
                this._metaKeywords += ', ' + newKeywords[key];
            }
        }
	}
	
    reset(): void {
		this._metaDescription = '';
        this._metaKeywords = '';
	}
}

export {PageMetaService}