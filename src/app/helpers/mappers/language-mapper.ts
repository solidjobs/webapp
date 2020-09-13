import {Language} from '../../models/language';

export class LanguageMapper {
  /**
   * Map ONE object language
   *
   * @param response
   */
  public static map(response: Response): Language {
    /**
     * Instantiates the model
     */
    const language = new Language();

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Set the new values on Model
     */
    language.id = json.id;
    language.cvId = json.cvId;
    language.language = json.language;

    /**
     * Return the value
     */
    return language;
  }

  /**
   * Map a *LIST* of language models from a json array of languages
   *
   * @param response
   */
  public static mapList(response: Response): Language[] {
    /**
     * Instantiates the model
     */
    const languages = [];

    /**
     * Declare json as any so we don't get errors from undefined properties
     */
    let json: any;
    json = response;

    /**
     * Creates all objects that the json got from the API and push on an array
     */
    for (const object of json) {
      const language = new Language();
      language.id = object.id;
      language.cvId = object.cvId;
      language.language = object.language;

      languages.push(language);
    }

    /**
     * Return an array of languages
     */
    return languages;
  }
}
