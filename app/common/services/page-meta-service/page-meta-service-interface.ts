export interface IPageMetaService {
	getMetaDescription(): string;
    setMetaDescription(newMetaDescription: string): void;
    getMetaKeywords(): string;
    setMetaKeywords(newKeywords: Array<string>): void;
    reset(): void;
}