import {IPageTitleService} from './page-title-service-interface'

class PageTitleService implements IPageTitleService {
	private _baseTitle: string;
	private _title: string;

	constructor() { }
	
	getTitle(): string {
		return this._title;
	}
	
	getBaseTitle(): string {
		return this._baseTitle;
	}
	
	getFullTitle(): string{
		return this._baseTitle + '|' + this._title;
	}
	
	setTitle(title: string): void {
		this._title = title;
	}
	
	setBaseTitle(title: string): void {
		this._baseTitle = title;
	}
}

export {PageTitleService}