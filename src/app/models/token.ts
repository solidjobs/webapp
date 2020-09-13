export class Token {

  private _hash: string;

  constructor(hash: string) {
    this.hash = hash;
  }

  get hash(): string {
    return this._hash;
  }

  set hash(value: string) {
    this._hash = value;
  }
}
