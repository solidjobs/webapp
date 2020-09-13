export class TrainingExperience {
  private _id: number;
  private _cvId: number;
  private _titleName: string;
  private _institutionName: string;
  private _city: string;
  private _startDate: number;
  private _endDate: number;
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

  get titleName(): string {
    return this._titleName;
  }

  set titleName(value: string) {
    this._titleName = value;
  }

  get institutionName(): string {
    return this._institutionName;
  }

  set institutionName(value: string) {
    this._institutionName = value;
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

  get endDate(): number {
    return this._endDate;
  }

  set endDate(value: number) {
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
