export interface IPageTitleService {
	getTitle(): string;
	getBaseTitle(): string;
	getFullTitle(): string;
	setTitle(title: string): void;
	setBaseTitle(title: string): void;
}