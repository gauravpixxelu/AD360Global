// Import necessary modules and interfaces
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';

// Project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-select-line-items-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDatepickerModule, FormsModule],
  templateUrl: './select-line-items.component.html',
  styleUrls: ['./select-line-items.component.scss']
})

export default class NewCampaignsComponent {

  campaignForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  
  card = [
    {
      image: 'assets/images/display.jpg',
      title: 'Display',
      text: 'Image,HTML5(including rich media)and native ads(both display and viedo)',
      link: '/new-line-items',
    },
    {
      image: 'assets/images/display.jpg',
      title: 'Video',
      text: 'Video ads sold on a CPM basis foe a variety of environments',
      link: '/new-line-items',
    },
    {
      image: 'assets/images/display.jpg',
      title: 'Audio',
      text: 'Audio ads sold on a CPM basis foe a variety of environments',
      link: '/new-line-items',
    },
    {
      image: 'assets/images/display.jpg',
      title: 'Mobile App Install',
      text: 'Drive installs of your app with display and video ads',
      link: '/new-line-items',
    },
    {
      image: 'assets/images/display.jpg',
      title: 'Ads in Mobile Apps',
      text: 'Display or video ads that serve on mobile app inventory',
      link: '/new-line-items',
    },
    {
      image: 'assets/images/display.jpg',
      title: 'YouTube & Partners Video',
      text: 'Video ads on YouTube and partners',
      link: '/new-line-items',
    },
    {
      image: 'assets/images/display.jpg',
      title: 'YouTube & Partners Audio',
      text: 'Video ads on YouTube and partners',
      link: '/new-line-items',
    }
  ];

  createNewLineItems() {
    this.router.navigate(['advertiser/campaigns/select-line-items/new-line-items']);
  }
  
}
