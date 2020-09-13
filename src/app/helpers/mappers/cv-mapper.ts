/**
 * Created by Melanie Caballero on 8/9/19.
 */

import {Cv} from '../../models/cv';
import {Response} from '@angular/http';

export class CvMapper {

  public static map(response: Response): Cv {
    let cv;
    cv = new Cv();
    let json: any;
    json = response;

    cv.id = json.id;
    cv.userId = json.userId;
    cv.name = json.name;
    cv.firstName = json.firstName;
    cv.lastName = json.lastName;
    cv.email = json.email;
    cv.picture = json.picture;
    cv.phone = json.phone;
    cv.city = json.city;
    cv.localAddress = json.localAddress;
    cv.jobName = json.jobName;
    cv.secretId = json.secretId;

    return cv;
  }
}
