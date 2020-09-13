import {Token} from '../../models/token';
import {Response} from '@angular/http';

export class TokenMapper {

  public static map(response: Response): Token {
    let token: Token;
    token = new Token(response.json().token);
    return token;
  }

}
