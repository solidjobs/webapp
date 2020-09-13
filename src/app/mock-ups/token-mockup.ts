import {Token} from '../models/token';
export class TokenMockup {

  public createToken() {
    return new Token('exampleHash');
  }
}
