// Import necessary modules and interfaces
import { Component, TemplateRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Define ChooseBudget and ChooseGoal interfaces
interface ChooseBudget {
  value: string;
  viewValue: string;
}

interface ChooseGoal {
  value: string;
  viewValue: string;
}

interface PublicInventory {
  value: string;
  viewValue: string;
}

interface Language {
  name: string;
  selected: boolean;
}

// Project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-new-line-items-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDatepickerModule, FormsModule],
  templateUrl: './new-line-items.component.html',
  styleUrls: ['./new-line-items.component.scss']
})
export default class NewCampaignsComponent {

  @ViewChild('demographicsModal') demographicsModal: any;
  @ViewChild('geographyModal') geographyModal: any;
  @ViewChild('languageModal') languageModal: any;
  selectedBudgetValue: string = '';
  selectedGoalValue: string = '';
  selectedPublicInventoryValue: string = '';
  languageSearch: string = '';
  optionMenuPublicInventoryActive: boolean = false;
  optionMenuBudgetActive: boolean = false;
  optionMenuGoalActive: boolean = false;
  private modalService = inject(NgbModal);

  chooseBudget: ChooseBudget[] = [
    { value: 'budget-1', viewValue: 'Budget 1' },
    { value: 'budget-2', viewValue: 'Budget 2' },
    { value: 'budget-3', viewValue: 'Budget 3' },
    { value: 'budget-4', viewValue: 'Budget 4' },
    { value: 'budget-5', viewValue: 'Budget 5' },
    { value: 'budget-6', viewValue: 'Budget 6' },
  ];

  chooseGoal: ChooseGoal[] = [
    { value: 'CPM', viewValue: 'CPM' },
    { value: 'CPV', viewValue: 'CPV' },
    { value: 'CPIAVC', viewValue: 'CPIAVC' },
    { value: 'CPA', viewValue: 'CPA' },
    { value: 'CPC', viewValue: 'CPC' },
    { value: 'CTR', viewValue: 'CTR' },
    { value: 'CPCV', viewValue: 'CPCV' },
    { value: 'CPL', viewValue: 'CPL' },
    { value: 'CPI', viewValue: 'CPI' },
    { value: 'CPCL', viewValue: 'CPCL' },
  ];

  choosePublicInventory: PublicInventory[] = [
    { value: 'publicinventory', viewValue: 'Public Inventory' },
    { value: 'test', viewValue: 'Test' },
  ];

  languages: Language[] = [
    { name: 'English', selected: false },
    { name: 'Spanish', selected: false },
    { name: 'French', selected: false },
    { name: 'German', selected: false },
    { name: 'Italian', selected: false },
    { name: 'Portuguese', selected: false },
    { name: 'Russian', selected: false },
    { name: 'Chinese (Simplified)', selected: false },
    { name: 'Chinese (Traditional)', selected: false },
    { name: 'Japanese', selected: false },
    { name: 'Korean', selected: false },
    { name: 'Arabic', selected: false },
    { name: 'Turkish', selected: false },
    { name: 'Hindi', selected: false },
    { name: 'Urdu', selected: false },
    { name: 'Bengali', selected: false },
    { name: 'Punjabi', selected: false },
    { name: 'Telugu', selected: false },
    { name: 'Marathi', selected: false },
    { name: 'Tamil', selected: false },
    { name: 'Urdu', selected: false },
    { name: 'Gujarati', selected: false },
    { name: 'Malayalam', selected: false },
    { name: 'Kannada', selected: false },
    { name: 'Odia', selected: false },
    { name: 'Assamese', selected: false },
    { name: 'Nepali', selected: false },
    { name: 'Sinhala', selected: false },
    { name: 'Burmese', selected: false },
    { name: 'Khmer', selected: false },
  ];

  campaignForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.selectedBudgetValue = this.chooseBudget[0].viewValue;
    this.selectedGoalValue = this.chooseGoal[0].viewValue;
    this.selectedPublicInventoryValue = this.choosePublicInventory[0].viewValue;
    this.campaignForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  toggleOptionMenuBudget() {
    this.optionMenuBudgetActive = !this.optionMenuBudgetActive;
  }

  toggleOptionMenuGoal() {
    this.optionMenuGoalActive = !this.optionMenuGoalActive;
  }

  toggleOptionPublicInventory() {
    this.optionMenuPublicInventoryActive = !this.optionMenuPublicInventoryActive;
  }

  selectChooseBudget(chooseBudget: ChooseBudget) {
    this.selectedBudgetValue = chooseBudget.viewValue;
    this.optionMenuBudgetActive = false;
  }

  selectChooseGoal(chooseGoal: ChooseGoal) {
    this.selectedGoalValue = chooseGoal.viewValue;
    this.optionMenuGoalActive = false;
  }

  selectPublicInventory(publicinventory: PublicInventory) {
    this.selectedPublicInventoryValue = publicinventory.viewValue;
    this.optionMenuPublicInventoryActive = false;
  }

  openDemographicsModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  openGeographyModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  openLanguageModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  get filteredLanguages(): Language[] {
    return this.languages.filter(language =>
      language.name.toLowerCase().includes(this.languageSearch.toLowerCase())
    );
  }

  saveCampaign() {
    console.log('Campaign saved!');
  }

  saveDemographics() {
    console.log('Demographics saved!');
  }

  saveGeography() {
    console.log('Geography saved!');
  }

  saveLanguage() {
    console.log('Language saved!');
  }

  createCampaign() {
    console.log('Campaign created!');
  }

  cancel() {
    console.log('Operation cancelled.');
  }
}
