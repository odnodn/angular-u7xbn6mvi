import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";

import { ChipList } from "@syncfusion/ej2-buttons";
import { ChipListComponent } from "@syncfusion/ej2-angular-buttons";
import { ClickEventArgs } from "@syncfusion/ej2-buttons";

import tree from "./data/tree.json";
import ref from "./data/ref.json";
import { JSONPath } from "jsonpath-plus";
import { List } from 'linqts';

export interface Referral {
   Active: number,
   LastUpdated: string,
   Clinic: string,
   Offering: string,
   Description: string,
   Gender: number,
   AgeGroup: number,
   AMKAPAAYPA: number,
   Arab: number,
   English: number,
   Farsi: number,
   French: number,
   Greek: number,
   Urdu: number,
   Turkish: number,
   Pashtun: number,
   Comment: string 
}

export interface Person {
  name: string,
  age: number
}

/**
 * Default Chips component
 */
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild("ejchip")
  public chip: ChipListComponent;
  @ViewChild("chipCountry")
  public chipCountry: ChipListComponent;
  @ViewChild("chipCity")
  public chipCity: ChipListComponent;
  @ViewChild("chipClinic")
  public chipClinics: ChipListComponent;
  @ViewChild("chipLanguage")
  public chipLanguage: ChipListComponent;
  @ViewChild("chipCountryOfOrign")
  public chipCountryOfOrign: ChipListComponent;
  @ViewChild("chipInsurance")
  public chipInsurance: ChipListComponent;
  @ViewChild("chipAgeGroup")
  public chipAgeGroup: ChipListComponent;
  @ViewChild("chipSex")
  public chipSex: ChipListComponent;
  @ViewChild("chipFamilySituation")
  public chipFamilySituation: ChipListComponent;
  @ViewChild("chipSpecialConditions")
  public chipSpecialConditions: ChipListComponent;
  @ViewChild("chipHousing")
  public chipHousing: ChipListComponent;
  @ViewChild("chipEncounter")
  public chipEncounter: ChipListComponent;
  @ViewChild("chipConditions")
  public chipConditions: ChipListComponent;
  @ViewChild("chipAffectedBodySystem")
  public chipAffectedBodySystem: ChipListComponent;
  @ViewChild("chipInfections")
  public chipInfections: ChipListComponent;
  @ViewChild("chipMainComplaints")
  public chipMainComplaints: ChipListComponent;
  @ViewChild("chipCovidSymptoms")
  public chipCovidSymptoms: ChipListComponent;
  @ViewChild("chipRelations")
  public chipRelations: ChipListComponent;
  @ViewChild("chipPriority")
  public chipPriority: ChipListComponent;
  @ViewChild("chipSeverity")
  public chipSeverity: ChipListComponent;
  @ViewChild("chipActions")
  public chipActions: ChipListComponent;
  @ViewChild("chipReferrals")
  public chipReferrals: ChipListComponent;

  choiceSelected = [1];
  filterSelected = [1, 3];

  expanded = "true";

  choiceCountrySelected = [0];
  choiceCitySelected = [0];
  choiceClinicSelected = [];
  choiceLanguageSelected = [];
  choiceCountryOfOrignSelected = [];
  choiceInsuranceSelected = [];
  choiceAgeGroupSelected = [];
  choiceSexSelected = [];
  choiceFamilySituationSelected = [];
  choiceSpeciialConditionsSelected = [];
  choiceHousingSelected = [];
  choiceEncounterSelected = [];
  choiceConditionSelected = [];
  choiceAffectedBodySystemSelected = [];
  choiceInfectionsSelected = [];
  choiceMainComplaintSelected = [];
  choiceCOVIDSymptomsSelected = [];
  choiceRelationsSelected = [];
  choicePrioritySelected = [];
  choiceSeveritySelected = [];
  choiceActionsSelected = [];
  choiceReferralsSelected = [];

  currentLanguage = "";
  currentCountryOfOrigin = "";
  currentInsuranceTyp = "";
  currentAgeGroup = "";
  currentSex = "";
  currentSpecialConditions = [];
  currentMainComplaints = [];
  currentActions = [];
  currentReferrals = [];

  countryPath = "ngo.Location.Country";
  citiesPath = "ngo.Location.City";
  clinicPath = "ngo.Location.Clinic";
  languagePath = "ngo.Language";
  countryOfOrignPath = "ngo.CountryOfOrign";
  insurancePath = "ngo.Insurance";
  ageGroupPath = "ngo.Age Group";
  sexPath = "ngo.Sex";
  familySituationPath = "ngo.Family situation";
  specialConditionsPath = "ngo.Special conditions";
  housingPath = "ngo.Housing";
  encounterPath = "ngo.Encounter";
  conditionsPath = "ngo.Condition";
  affectedBodySystemPath = "ngo.Affected body system";
  infectionsPath = "ngo.Infections";
  mainComplaintPath = "ngo.Main complaint";
  covidSymptomsPath = "ngo.COVID symptoms";
  relationsPath = "ngo.Relations";
  priorityPath = "ngo.Priority";
  severityPath = "ngo.Severity";
  actionsPath = "ngo.Actions";
  referralsPath = "ngo.Referrals";

  countries = JSONPath(this.countryPath, tree, null, null);
  cities = JSONPath(this.citiesPath, tree, null, null)[0];
  clinics = JSONPath(this.clinicPath, tree, null, null)[0];
  languages = JSONPath(this.languagePath, tree, null, null)[0];
  countryOfOrigns = JSONPath(this.countryOfOrignPath, tree, null, null)[0];
  insurances = JSONPath(this.insurancePath, tree, null, null)[0];
  ageGroups = JSONPath(this.ageGroupPath, tree, null, null)[0];
  sexs = JSONPath(this.sexPath, tree, null, null)[0];
  familySituations = JSONPath(this.familySituationPath, tree, null, null)[0];
  specialConditions = JSONPath(this.specialConditionsPath, tree, null, null)[0];
  housings = JSONPath(this.housingPath, tree, null, null)[0];
  encounters = JSONPath(this.encounterPath, tree, null, null)[0];
  conditions = JSONPath(this.conditionsPath, tree, null, null)[0];
  affectedBodySystems = JSONPath(
    this.affectedBodySystemPath,
    tree,
    null,
    null
  )[0];
  infections = JSONPath(this.infectionsPath, tree, null, null)[0];
  mainComplaints = JSONPath(this.mainComplaintPath, tree, null, null)[0];
  covidSymptoms = JSONPath(this.covidSymptomsPath, tree, null, null)[0];
  relations = JSONPath(this.relationsPath, tree, null, null)[0];
  priorities = JSONPath(this.priorityPath, tree, null, null)[0];
  severities = JSONPath(this.severityPath, tree, null, null)[0];
  actions = JSONPath(this.actionsPath, tree, null, null)[0];
  referrals = JSONPath(this.referralsPath, tree, null, null)[0];

  chips = ["Chip 1", "Chip 2", "Chip 3"];

  // <div class="btn"><button class="e-control e-btn" (click)="add($event)">Add Item</button></div>
  public add = function(event: any): void {
    this.ejchip.add("jenifer");
  };

  public getSelectedChips = function(event: any): void {
    let name = this.ejchip.getSelectedChips().text;
    alert("Selected chip is " + name);
  };

  //  <div class="btn"><button class="e-control e-btn" (click)="select($event)">Select</button></div>
  public select = function(event: any): void {
    this.ejchip.select([1, 3]);
  };

  // <ejs-chiplist enableDelete="true" selection="Single" (beforeClick)="chipClick($event)">
  chipClick(e: ClickEventArgs) {
    if (e.text) {
      alert("you have selected " + e.text);
    }
  }

  // <ejs-chiplist id="chip" (click)="chipclick($event)">
  chipclick(e: ClickEventArgs) {
    if (e.text) {
      alert("you have clicked " + e.text);
    }
  }

  // new ChipList({chips: ['Janet Leverling'], cssClass: "e-outline"
  // }, '#chip');
  // new ChipList({ chips: ['Send a text', 'Set a remainder', 'Read my emails // ', 'Set alarm'], selection: 'Multiple', selectedChips: [1, 3] }, '#chip');
  ngOnInit() {
    console.log(tree);
    console.log(tree.ngo.Location.Country);
    this.filterRefOnInuranceStatus(1);
    this.filterDynamic(this.testFilter);

    this.linqFilter();
  }

  hasInsurance: boolean | undefined;

  chipInsuranceClick(e: ClickEventArgs) {
    if (e.text) {
      switch (e.text) {
        case "P":
          this.hasInsurance = true;
          console.log("PAAYPA");
          break;
        case "A":
          this.hasInsurance = true;
          break;
        default:
          this.hasInsurance = false;
      }
      this.currentInsuranceTyp = e.text;
      console.log(
        "Insurance: " + this.hasInsurance + " - (Type: " + e.text + ")"
      );
      this.chipSelected("Insurance", e.text);
    }
  }

  isAdult: boolean | undefined;

  chipAgeGroupClick(e: ClickEventArgs) {
    if (e.text) {
      switch (e.text) {
        case "new born":
        case "0-10":
        case "11-20":
          this.isAdult = false;
          break;
        default:
          this.isAdult = true;
      }
      console.log("IsAdult: " + this.isAdult);
      this.chipSelected("AgeGroup", e.text);
    }
  }

  chipSexClick(e: ClickEventArgs) {
    if (e.text) {
      this.currentSex = e.text;
      console.log("CurrentSex: " + this.currentSex);
      this.chipSelected("Sex", e.text);
    }
  }

  chipSpecialConditionsClick(e: ClickEventArgs) {
    // pregnant / new born / UAM
  }

  chipLanguageClick(e: ClickEventArgs) {
    if (e.text) {
      this.currentLanguage = e.text;
      console.log(this.currentLanguage);
      this.chipSelected("Language", e.text);
    }
  }

  chipAffectedBodySystemClick(e: ClickEventArgs) {
    if (e.text) {
      this.chipSelected("AffectedBodySystem", e.text);
    }
  }
  chipMainComplaintClick(e: ClickEventArgs) {
    if (e.text) {
      this.chipSelected("MainComplaint", e.text);
      console.log("Main complaint :" + e.text);
    }
  }

  chipReferralsClick(e: ClickEventArgs) {
    if (e.text) {
      this.chipSelected("Referrals", e.text);
    }
  }

  chipSelected(groupname: string, text: string) {
    if (groupname) {
      console.log(groupname);
      switch (groupname) {
        case "Insurance":
          this.updateReferrals();
          break;
        case "AgeGroup":
          this.updateReferrals();
          break;
        case "Sex":
          this.updateReferrals();
          break;
        case "Language":
          this.updateReferrals();
          break;
        case "AffectedBodySystem":
          break;
        case "MainComplaint":
          this.selectSOAPTemplate(text);
          break;
        case "Referrals":
          break;
      }
    }
  }

  updateReferrals() {
    console.log("hasInsurance undefined? :" + this.hasInsurance === undefined);
    console.log("isAdult undefined? :" + this.isAdult === undefined);
    console.log("this.currentSex !== :" + this.currentSex !== "");
    console.log("his.currentLanguage !== :" + this.currentLanguage !== "");

    if (
      !this.hasInsurance === undefined &&
      !this.isAdult === undefined &&
      this.currentSex !== "" &&
      this.currentLanguage !== ""
    ) {
      this.selectReferrals(
        this.currentSex,
        this.isAdult,
        this.hasInsurance,
        this.currentLanguage
      );
    }
    this.selectReferrals(
      this.currentSex,
      this.isAdult,
      this.hasInsurance,
      this.currentLanguage
    );
  }

  selectReferrals(
    sex: string,
    isAdult: boolean,
    hasInsurance: boolean,
    language: string
  ) {
    console.log(
      `Sex: ${sex} - isAdult: ${isAdult} - hasInsurance: ${hasInsurance} - language: ${language}`
    );
  }

  selectSOAPTemplate(condition: string) {
    console.log("SOAPTemplate for " + condition);
  }

  selectDifferentialDiagnoses() {}

  selectMedicationForCondition() {}

  selectMedicalGuidelinesFromCondition() {}

  export: object;
  exportSelected() {
    this.export = {
      choiceCountrySelected: this.chipCountry.getSelectedChips(),
      choiceCitySelected: this.chipCity.getSelectedChips(),
      choiceClinicSelected: this.chipClinics.getSelectedChips(),
      choiceLanguageSelected: this.chipLanguage.getSelectedChips(),
      choiceCountryOfOrignSelected: this.chipCountryOfOrign.getSelectedChips(),
      choiceInsuranceSelected: this.chipInsurance.getSelectedChips(),
      choiceAgeGroupSelected: this.chipAgeGroup.getSelectedChips(),
      choiceSexSelected: this.chipSex.getSelectedChips(),
      choiceFamilySituationSelected: this.chipFamilySituation.getSelectedChips(),
      choiceSpecialConditionsSelected: this.chipSpecialConditions.getSelectedChips(),
      choiceHousingSelected: this.chipHousing.getSelectedChips(),
      choiceEncounterSelected: this.chipEncounter.getSelectedChips(),
      choiceConditionSelected: this.chipConditions.getSelectedChips(),
      choiceAffectedBodySystemSelected: this.chipAffectedBodySystem.getSelectedChips(),
      choiceInfectionsSelected: this.chipInfections.getSelectedChips(),
      choiceMainComplaintSelected: this.chipMainComplaints.getSelectedChips(),
      choiceCOVIDSymptomsSelected: this.chipCovidSymptoms.getSelectedChips(),
      choiceRelationsSelected: this.chipRelations.getSelectedChips(),
      choicePrioritySelected: this.chipPriority.getSelectedChips(),
      choiceSeveritySelected: this.chipSeverity.getSelectedChips(),
      choiceActionsSelected: this.chipActions.getSelectedChips(),
      choiceReferralsSelected: this.chipReferrals.getSelectedChips()
    };

    console.log(this.export);
  }

  // filterItems(data, [{ key: 'type', value: 'wood' }, { key: 'some.nested.prop', value: 'value' }])
  // https://stackoverflow.com/questions/31170630/js-array-filter-with-dynamic-filter-criterion
  filterItems = (data, filters) =>
    data.filter(
      item =>
        !filters.find(
          x =>
            x.key.split(".").reduce((keys, key) => keys[key], item) !== x.value
        )
    );

  filterRefOnInuranceStatus(hasInsurance: boolean) {
    const filtered = ref.filter(el => el.AMKAPAAYPA === hasInsurance);

    console.log(filtered);
  }

  testFilter = [{key: 'AMKAPAAYPA', value: '0'},
                {key: 'Gender', value: '2'},
                {key: 'AgeGroup', value: '2'}];

  filterDynamic(filterArray){
    const filtered = this.filterItems(ref, filterArray);

    console.log(filtered);
  }


  // AgeGroup     1 Children 2 Adult 3 Both
  // GenderGroup  1 Female 2 Male 3 N 4 Alle
  // 
  linqFilter(){
    let referrals = new List<Referral>();
    
    ref.forEach( el => referrals.Add(el));

    const res = referrals.Where( x => x.AMKAPAAYPA == 1 && x.Gender > 0
                                && x.AgeGroup == 1);
    console.log(res)

  }
}
