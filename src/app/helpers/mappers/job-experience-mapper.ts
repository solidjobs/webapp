import {JobExperience} from '../../models/job-experience';

export class JobExperienceMapper {
  /**
   * Map ONE object jobExperience
   *
   * @param response
   */
  public static map(response: Response): JobExperience {
    /**
     * Instantiates the model
     */
    const jobExperience = new JobExperience();

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Set the new values on Model
     */
    jobExperience.id = json.id;
    jobExperience.cvId = json.cvId;
    jobExperience.professionalCategory = json.professionalCategory;
    jobExperience.companyName = json.companyName;
    jobExperience.city = json.city;
    jobExperience.startDate = json.startDate;
    jobExperience.endDate = json.endDate;
    jobExperience.description = json.description;
    jobExperience.show = json.show;

    /**
     * Return the value
     */
    return jobExperience;
  }

  /**
   * Map a *LIST* of jobExperience models from a json array of jobExperience
   *
   * @param response
   */
  public static mapList(response: Response): JobExperience[] {
    /**
     * Instantiates the model
     */
    const jobExperiences = [];

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Creates all objects that the json got from the API and push on an array
     */
    for (const object of json) {
      const jobExperience = new JobExperience();
      jobExperience.id = object.id;
      jobExperience.cvId = object.cvId;
      jobExperience.professionalCategory = object.professionalCategory;
      jobExperience.companyName = object.companyName;
      jobExperience.city = object.city;
      jobExperience.startDate = object.startDate;
      jobExperience.current = object.current;
      jobExperience.endDate = object.endDate;
      jobExperience.description = object.description;
      jobExperience.show = object.show;

      jobExperiences.push(jobExperience);
    }

    /**
     * Return an array of languages
     */
    return jobExperiences;
  }
}
