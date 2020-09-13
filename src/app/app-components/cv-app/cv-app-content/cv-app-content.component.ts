import {Component, OnInit} from '@angular/core';
import {Language} from '../../../models/language';
import {PanelApiLanguageService} from '../../../services/panel-api-services/panel-api-language.service';
import {Ability} from '../../../models/ability';
import {PanelApiAbilityService} from '../../../services/panel-api-services/panel-api-ability.service';
import {JobExperience} from '../../../models/job-experience';
import {PanelApiJobExperienceService} from '../../../services/panel-api-services/panel-api-job-experience.service';
import {PanelApiTrainingExperienceServiceService} from '../../../services/panel-api-services/panel-api-training-experience-service.service';
import {TrainingExperience} from '../../../models/training-experience';

declare function loadMat(): any;

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-cv-app-content',
  templateUrl: './cv-app-content.component.html',
  styleUrls: ['./cv-app-content.component.css']

})
export class CvAppContentComponent implements OnInit {

  public toastSavedHTML = `<span>Guardado correctamente.</span><button class="btn-flat toast-action" onclick="M.Toast.dismissAll();">OK</button>`;
  public toastDeletedHTML = `<span>Borrado correctamente.</span><button class="btn-flat toast-action" onclick="M.Toast.dismissAll();">OK</button>`;

  private _languages: Language[];
  private _errorLanguage: any;
  private _abilities: Ability[];
  private _errorAbility: any;
  private _trainingExperiences: TrainingExperience[];
  private _errorTrainingExperience: any;
  private _jobExperiences: JobExperience[];
  private _errorJobExperience: any;
  private _loaded = false;
  private _loadedJobExperience = false;
  private _loadedTrainingExperience = false;
  private _loadedlanguages = false;
  private _loadedAbilities =  false;
  private _savingJobExperience = false;
  private _savingTrainingExperience = false;
  private _savingLanguages = false;
  private _savingAbilities = false;

  /**
   * Constructor
   *
   * @param panelApiLanguageService
   * @param panelApiAbilityService
   * @param panelApiJobExperienceService
   * @param panelApiTrainingExperienceService
   */
  constructor(private panelApiLanguageService: PanelApiLanguageService,
              private panelApiAbilityService: PanelApiAbilityService,
              private panelApiJobExperienceService: PanelApiJobExperienceService,
              private panelApiTrainingExperienceService: PanelApiTrainingExperienceServiceService) {
  }

  ngOnInit() {
    this.loadLanguages();
    this.loadAbilities();
    this.loadTrainingExperiences();
    this.loadJobExperiences();
  }

  loadLanguages() {
    this.panelApiLanguageService.getLanguages().subscribe(
      next => this.languages = next,
      error => this.errorLanguage = error
    )
  }

  loadAbilities() {
    this.panelApiAbilityService.getAbilities().subscribe(
      next => this.abilities = next,
      error => this.errorAbility = error
    )
  }

  loadTrainingExperiences() {
    this.panelApiTrainingExperienceService.getTrainingExperience().subscribe(
      next => this.trainingExperiences = next,
      error => this.errorTrainingExperience = error
    )
  }

  loadJobExperiences() {
    this.panelApiJobExperienceService.getJobExperiences().subscribe(
      next => this.jobExperiences = next,
      error => this.errorJobExperience = error
    )
  }

  /**
   *
   */
  onLoad() {
    this.loaded = true;
    setTimeout(function () {
      $('.collapsible').collapsible();
      $('.datepicker').datepicker();
      loadMat();
    }, 1);
  }

  /**
   *
   * @param jobExperienceElement
   */
  onClickDeleteJobExperienceButton(jobExperienceElement) {
    if (confirm('¿Borrar esta experiencia laboral? A mí me gustaba esa empresa.')) {
      this.deleteJobExperience(jobExperienceElement.getAttribute('data-job-experience-id'));
    }
  }

  /**
   *
   * @param id
   */
  deleteJobExperience(id) {
    this.jobExperiences = null;
    this.panelApiJobExperienceService.deleteJobExperience(id).subscribe(
      () => {
        this.loadJobExperiences();
        this.showDeletedToast();
      },
      () => {
        alert('Ha ocurrido un error intentando borrar esta experiencia laboral.');
      }
    );
  }

  /**
   *
   * @param jobExperienceElement
   */
  onClickDeleteTrainingExperienceButton(jobExperienceElement) {
    if (confirm('¿Borrar esta formación? A mí me parecía interesante...')) {
      this.deleteTrainingExperience(jobExperienceElement.getAttribute('data-training-experience-id'));
    }
  }

  /**
   *
   * @param id
   */
  deleteTrainingExperience(id) {
    this.trainingExperiences = null;
    this.panelApiTrainingExperienceService.deleteTrainingExperience(id).subscribe(
      () => {
        this.loadTrainingExperiences();
        this.showDeletedToast();
      },
      () => {
        alert('Ha ocurrido un error intentando borrar esta formación.');
      }
    );
  }

  /**
   *
   * @param abilityElement
   */
  onClickDeleteAbilityButton(abilityElement) {
    if (confirm('¿Borrar esta habilidad? ¡Parecía muy chula!')) {
      this.deleteAbility(abilityElement.getAttribute('data-ability-id'));
    }
  }

  /**
   *
   * @param id
   */
  deleteAbility(id) {
    this.abilities = null;
    this.panelApiAbilityService.deleteAbility(id).subscribe(
      () => {
        this.loadAbilities();
        this.showDeletedToast();
      },
      () => {
        alert('Ha ocurrido un error intentando borrar esta habilidad.');
      }
    );
  }
  /**
   *
   * @param languageElement
   */
  onClickDeleteLanguageButton(languageElement) {
    if (confirm('¿Quieres borrar este idioma? A mí me gusta mucho.')) {
      this.deleteLanguage(languageElement.getAttribute('data-language-id'));
    }
  }

  /**
   *
   * @param id
   */
  deleteLanguage(id) {
    this.languages = null;
    this.panelApiLanguageService.deleteLanguage(id).subscribe(
      () => {
        this.loadLanguages();
        this.showDeletedToast();
      },
      () => {
        alert('Ha ocurrido un error intentando borrar este idioma.');
      }
    );
  }

  /**
   *
   * @param jobExperienceButton
   */
  onClickSaveJobExperienceButton(jobExperienceButton) {
    this.savingJobExperience = true;
    this.updateJobExperience(jobExperienceButton.getAttribute('data-job-experience-id'));
  }

  /**
   *
   * @param jobExperienceId
   */
  updateJobExperience(jobExperienceId) {
    this.panelApiJobExperienceService.editJobExperience(this.getJobExperienceById(jobExperienceId)).subscribe(
      () => {
        this.savingJobExperience = false;
        this.showSavedToast();
      },
      () => {
        alert('Ocurrió un error intentando editar esta experiencia laboral.');
        this.savingJobExperience = false;
      }
    );
  }

  getJobExperienceById(jobExperienceId) {
    let out = null;

    for (const jobExperience of this.jobExperiences) {
      if (jobExperience.id === jobExperienceId) {
        out = jobExperience;
      }
    }

    return out;
  }

  /**
   *
   * @param trainingExperienceButton
   */
  onClickSaveTrainingExperienceButton(trainingExperienceButton) {
    this.savingTrainingExperience = true;
    this.updateTrainingExperience(trainingExperienceButton.getAttribute('data-training-experience-id'));
  }

  /**
   *
   * @param trainingExperienceId
   */
  updateTrainingExperience(trainingExperienceId) {
    this.panelApiTrainingExperienceService.updateTrainingExperience(this.getTrainingExperienceById(trainingExperienceId)).subscribe(
      () => {
        console.log('successful');
        this.savingTrainingExperience = false;
        this.showSavedToast();
      },
      () => {
        alert('Ocurrió un error intentando editar la formación.');
        this.savingTrainingExperience = false;
      }
    );
  }

  /**
   *
   * @param trainingExperienceId
   */
  getTrainingExperienceById(trainingExperienceId) {
    let out = null;

    for (const trainingExperience of this.trainingExperiences) {
      if (trainingExperience.id === trainingExperienceId) {
        out = trainingExperience;
      }
    }

    return out;
  }

  onClickSaveAbilityButton(abilityElement) {
    this.savingAbilities = true;
    this.updateAbility(abilityElement.getAttribute('data-ability-id'));
  }

  updateAbility(abilityId) {
    this.panelApiAbilityService.updateAbility(this.getAbilityById(abilityId)).subscribe(
      () => {
        console.log('successful');
        this.savingAbilities = false;
        this.showSavedToast();
      },
      () => {
        alert('Ocurrió un error intentando añadir una nueva habilidad.');
        this.savingAbilities = false;
      }
    );
  }

  /**
   *
   * @param abilityId
   */
  getAbilityById(abilityId) {
    let out = null;

    for (const ability of this.abilities) {
      if (ability.id === abilityId) {
        out = ability;
      }
    }

    return out;
  }

  /**
   * Saving languages
   * @param languageButton
   */
  onClickSaveLanguageButton(languageButton) {
    this.savingLanguages = true;
    this.updateLanguage(languageButton.getAttribute('data-language-id'));
  }

  /**
   * Update language
   * @param languageId
   */
  updateLanguage(languageId) {
    this.panelApiLanguageService.updateLanguage(this.getLanguageById(languageId)).subscribe(
      () => {
        console.log('successful');
        this.savingLanguages = false;
        this.showSavedToast();
      },
      () => {
        alert('Ocurrió un error intentando actualizar un idioma.');
        this.savingLanguages = false;
      }
    );
  }

  /**
   *
   * @param languageId
   */
  getLanguageById(languageId) {
    let out = null;

    for (const language of this.languages) {
      if (language.id === languageId) {
        out = language;
      }
    }

    return out;
  }

  /**
   *
   */
  onClickAddJobExperienceButton() {
    this.addJobExperience();
  }

  /**
   *
   */
  addJobExperience() {
    this.jobExperiences = null;
    this.panelApiJobExperienceService.createJobExperience().subscribe(
      () => {
        this.loadJobExperiences();
      },
      () => {
        alert('Error al intentar crear una nueva experiencia laboral.');
      }
    );
  }


  /**
   *
   */
  onClickAddTrainingExperienceButton() {
    this.addTrainingExperience();
  }

  /**
   *
   */
  addTrainingExperience() {
    this.trainingExperiences = null;
    this.panelApiTrainingExperienceService.createTrainingExperience().subscribe(
      () => {
        this.loadTrainingExperiences();
      },
      () => {
        alert('Error al intentar crear una nueva formación.');
      }
    );
  }

  onClickAddAbilityButton() {
    this.addAbility();
  }

  addAbility() {
    this.abilities = null;
    this.panelApiAbilityService.createAbility().subscribe(
      () => {
        this.loadAbilities();
      },
      () => {
        alert('Error al intentar añadir una nueva habilidad.');
      }
    );
  }

  onClickAddLanguageButton() {
    this.addLanguage();
  }

  addLanguage() {
    this.languages = null;
    this.panelApiLanguageService.createLanguage().subscribe(
      () => {
        this.loadLanguages();
      },
      () => {
        alert('Error al intentar añadir un nuevo idioma.');
      }
    );
  }

  get languages(): Language[] {
    return this._languages;
  }

  set languages(value: Language[]) {
    this._languages = value;
    this.loadedlanguages = true;
    this.onLoad();
  }

  get errorLanguage(): any {
    return this._errorLanguage;
  }

  set errorLanguage(value: any) {
    this._errorLanguage = value;
  }

  get abilities(): Ability[] {
    return this._abilities;
  }

  set abilities(value: Ability[]) {
    this._abilities = value;
    this.loadedAbilities = true;
    this.onLoad();
  }

  get errorAbility(): any {
    return this._errorAbility;
  }

  set errorAbility(value: any) {
    this._errorAbility = value;
  }

  get trainingExperiences(): TrainingExperience[] {
    return this._trainingExperiences;
  }

  set trainingExperiences(value: TrainingExperience[]) {
    this._trainingExperiences = value;
    this.loadedTrainingExperience = true;
    this.onLoad();
  }

  get errorTrainingExperience(): any {
    return this._errorTrainingExperience;
  }

  set errorTrainingExperience(value: any) {
    this._errorTrainingExperience = value;
  }

  get jobExperiences(): JobExperience[] {
    return this._jobExperiences;
  }

  set jobExperiences(value: JobExperience[]) {
    this._jobExperiences = value;
    this.loadedJobExperience = true;
    this.onLoad();
  }

  get errorJobExperience(): any {
    return this._errorJobExperience;
  }

  set errorJobExperience(value: any) {
    this._errorJobExperience = value;
  }

  get loaded() {
    return this._loaded;
  }

  set loaded(value) {
    this._loaded = value;
  }

  get loadedJobExperience(): boolean {
    return this._loadedJobExperience;
  }

  set loadedJobExperience(value: boolean) {
    this._loadedJobExperience = value;
  }

  get loadedTrainingExperience(): boolean {
    return this._loadedTrainingExperience;
  }

  set loadedTrainingExperience(value: boolean) {
    this._loadedTrainingExperience = value;
  }

  get loadedlanguages(): boolean {
    return this._loadedlanguages;
  }

  set loadedlanguages(value: boolean) {
    this._loadedlanguages = value;
  }

  get loadedAbilities(): boolean {
    return this._loadedAbilities;
  }

  set loadedAbilities(value: boolean) {
    this._loadedAbilities = value;
  }

  get savingJobExperience(): boolean {
    return this._savingJobExperience;
  }

  set savingJobExperience(value: boolean) {
    this._savingJobExperience = value;
  }

  get savingTrainingExperience(): boolean {
    return this._savingTrainingExperience;
  }

  set savingTrainingExperience(value: boolean) {
    this._savingTrainingExperience = value;
  }

  get savingLanguages(): boolean {
    return this._savingLanguages;
  }

  set savingLanguages(value: boolean) {
    this._savingLanguages = value;
  }

  get savingAbilities(): boolean {
    return this._savingAbilities;
  }

  set savingAbilities(value: boolean) {
    this._savingAbilities = value;
  }

  /**
   *
   * @param show
   */
  parseInt(show) {
    return parseInt(show);
  }

  /**
   * Show toast deleted confirmation
   */
  showDeletedToast() {
    M.toast({html: this.toastDeletedHTML});
  }

  /**
   * Show toast saved confirmation
   */
  showSavedToast() {
    M.toast({html: this.toastSavedHTML});
  }
}
