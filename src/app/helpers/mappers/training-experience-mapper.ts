import {TrainingExperience} from '../../models/training-experience';

export class TrainingExperienceMapper {
  /**
   * Map ONE object trainingExperience
   *
   * @param response
   */
  public static map(response: Response): TrainingExperience {
    /**
     * Instantiates the model
     */
    const trainingExperience = new TrainingExperience();

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Set the new values on Model
     */
    trainingExperience.id = json.id;
    trainingExperience.cvId = json.cvId;
    trainingExperience.titleName = json.titleName;
    trainingExperience.institutionName = json.institutionName;
    trainingExperience.city = json.city;
    trainingExperience.startDate = json.startDate;
    trainingExperience.endDate = json.endDate;
    trainingExperience.description = json.description;
    trainingExperience.show = json.show;

    /**
     * Return the value
     */
    return trainingExperience;
  }

  /**
   * Map a *LIST* of language models from a json array of languages
   *
   * @param response
   */
  public static mapList(response: Response): TrainingExperience[] {
    /**
     * Instantiates the model
     */
    const trainingExperiences = [];

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Creates all objects that the json got from the API and push on an array
     */
    for (const object of json) {
      const trainingExperience = new TrainingExperience();
      trainingExperience.id = object.id;
      trainingExperience.cvId = object.cvId;
      trainingExperience.titleName = object.titleName;
      trainingExperience.institutionName = object.institutionName;
      trainingExperience.city = object.city;
      trainingExperience.startDate = object.startDate;
      trainingExperience.endDate = object.endDate;
      trainingExperience.description = object.description;
      trainingExperience.show = object.show;

      trainingExperiences.push(trainingExperience);
    }

    /**
     * Return an array of languages
     */
    return trainingExperiences;
  }
}
