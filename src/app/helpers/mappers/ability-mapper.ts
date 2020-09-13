import {Ability} from '../../models/ability';

export class AbilityMapper {
  /**
   * Map ONE object ability
   *
   * @param response
   */
  public static map(response: Response): Ability {
    /**
     * Instantiates the model
     */
    const ability = new Ability();

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Set the new values on Model
     */
    ability.id = json.id;
    ability.cvId = json.cvId;
    ability.ability = json.ability;

    /**
     * Return the value
     */
    return ability;
  }

  /**
   * Map a *LIST* of ability models from a json array of abilities
   *
   * @param response
   */
  public static mapList(response: Response): Ability[] {
    /**
     * Instantiates the model
     */
    const abilities = [];

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Creates all objects that the json got from the API and push on an array
     */
    for (const object of json) {
      const ability = new Ability();
      ability.id = object.id;
      ability.cvId = object.cvId;
      ability.ability = object.ability;

      abilities.push(ability);
    }

    /**
     * Return an array of languages
     */
    return abilities;
  }
}
