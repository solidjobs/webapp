export class Ability {
  private _id: number;
  private _cvId: number;
  private _ability: string;

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

  get ability(): string {
    return this._ability;
  }

  set ability(value: string) {
    this._ability = value;
  }
}
