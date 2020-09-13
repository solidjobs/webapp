export class Language {
  private _id: number;
  private _cvId: number;
  private _language: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get cvId(): number {
    return this._cvId;
  }

  set cvId(value: number) {
    this._cvId = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }
}
