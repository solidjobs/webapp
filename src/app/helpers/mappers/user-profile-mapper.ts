import {UserProfile} from '../../models/user-profile';
import {Response} from '@angular/http';


export class UserProfileMapper {

  public static map(response: Response): UserProfile {
    let userProfile: UserProfile;
    const res = response.json();
    userProfile = new UserProfile(res.id, res.username, res.username, res.email);
    return userProfile;
  }

}
