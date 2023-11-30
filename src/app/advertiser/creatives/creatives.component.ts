// Import necessary modules and interfaces
import { Component, TemplateRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-creatives-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDatepickerModule, FormsModule],
  templateUrl: './creatives.component.html',
  styleUrls: ['./creatives.component.scss']
})
export default class NewCampaignsComponent {

  model: NgbDateStruct = { year: 2023, month: 11, day: 17 }; 
  placement = 'bottom';

  card = [
    {
      type: 'image',
      image: 'assets/images/display.jpg',
      title: 'Display',
      text: 'Image, HTML5 (including rich media), and native ads (both display and video)',
      link: '/new-line-items',
    },
    {
      type: 'video',
      videoUrl: 'assets/videos/sample.mp4',  
      title: 'Video',
      text: 'Video ads sold on a CPM basis for a variety of environments',
      link: '/new-line-items',
    },
    {
      type: 'youtube',
      youtubeUrl: 'https://www.youtube.com/embed/xvBUgdKUz5g?si=QUi8VsW-tl-MAgGw', 
      title: 'YouTube Video',
      text: 'Video ads on YouTube and partners',
      link: '/new-line-items',
    },
    {
      type: 'video',
      videoUrl: 'assets/videos/sample.mp4',  
      title: 'Video',
      text: 'Video ads sold on a CPM basis for a variety of environments',
      link: '/new-line-items',
    },
    {
      type: 'youtube',
      youtubeUrl: 'https://www.youtube.com/embed/xvBUgdKUz5g?si=hdK0qCqVLYduUq-A', 
      title: 'YouTube Video',
      text: 'Video ads on YouTube and partners',
      link: '/new-line-items',
    },
    {
      type: 'video',
      videoUrl: 'assets/videos/sample.mp4',  
      title: 'Video',
      text: 'Video ads sold on a CPM basis for a variety of environments',
      link: '/new-line-items',
    },
    {
      type: 'youtube',
      youtubeUrl: 'https://www.youtube.com/embed/xvBUgdKUz5g?si=hdK0qCqVLYduUq-A', 
      title: 'YouTube Video',
      text: 'Video ads on YouTube and partners',
      link: '/new-line-items',
    },
    {
      type: 'image',
      image: 'assets/images/display.jpg',
      title: 'Display',
      text: 'Image, HTML5 (including rich media), and native ads (both display and video)',
      link: '/new-line-items',
    }
  ];

  handleCardClick(card: any) {
    if (card.type === 'image') {
    } else if (card.type === 'youtube') {
    } else if (card.type === 'mp4') {
    }
  }

  constructor(private router: Router, private fb: FormBuilder) {}

  formatDate(date: NgbDateStruct): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[date.month - 1]} ${date.day}, ${date.year}`;
    return formattedDate;
  }

  createCreatives() {
    this.router.navigate(['advertiser/creatives']);
  }
}
