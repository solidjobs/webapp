export class JobExperience {
  private _id: number;
  private _cvId: number;
  private _professionalCategory: string;
  private _companyName: string;
  private _city: string;
  private _startDate: number;
  private _current: number;
  private _endDate: any;
  private _description: string;
  private _show: number;

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

  get professionalCategory(): string {
    return this._professionalCategory;
  }

  set professionalCategory(value: string) {
    this._professionalCategory = value;
  }

  get companyName(): string {
    return this._companyName;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get startDate(): number {
    return this._startDate;
  }

  set startDate(value: number) {
    this._startDate = value;
  }

  get current(): number {
    return this._current;
  }

  set current(value: number) {
    this._current = value;
  }

  get endDate(): any {
    return this._endDate;
  }

  set endDate(value: any) {
    this._endDate = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get show(): number {
    return this._show;
  }

  set show(value: number) {
    this._show = value;
  }
}
