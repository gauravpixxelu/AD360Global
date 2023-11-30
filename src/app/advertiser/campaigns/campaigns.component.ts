// angular import
import { Component, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';


@Component({
  selector: 'app-campaigns-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDatepickerModule, FormsModule  ],
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
  
  
})
export default class DashAnalyticsComponent {

  model: NgbDateStruct = { year: 2023, month: 11, day: 17 }; 
  placement = 'bottom';
  private modalService = inject(NgbModal);
  checkboxStates: boolean[] = [false, false, false, false, false, false, false];
  selectedTab: number = 1;

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
  


  state: string = 'stop';
  buttonText: string = 'Activate';

  buttonPlayPress() {
    if (this.state === 'stop') {
      this.state = 'play';
      this.buttonText = 'Pause';
    } else if (this.state === 'play' || this.state === 'resume') {
      this.state = 'pause';
      this.buttonText = 'Activate';
    } else if (this.state === 'pause') {
      this.state = 'resume';
      this.buttonText = 'Pause';
    }
    console.log("button play pressed, play was " + this.state);
  }



  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

  card1 = [
    {
      background: 'white',
      title: 'Campaigns',
      number: '176',
    },
    {
      background: 'white',
      title: 'Approved Campaigns',
      number: '174',
    },
    {
      background: 'white',
      title: 'Approval Pending Campaigns',
      number: '2',
    }
  ];

  card2 = [
    {
      background: 'white',
      title: 'Total impression delivered',
      number: '2,458',
    },
    {
      background: 'white',
      title: 'clicks',
      number: '45k',
    },
    {
      background: 'white',
      title: 'average cpm',
      number: '1248',
    }
  ];

  getSelectedCards() {
    switch (this.selectedTab) {
      case 0:
        return this.card1;
      case 1:
        return this.card2;
      default:
        return [];
    }
  }


  constructor(private router: Router) {

  }

  formatDate(date: NgbDateStruct): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[date.month - 1]} ${date.day}, ${date.year}`;
    return formattedDate;
  }

  createNewInsertionOrder() {
    this.router.navigate(['advertiser/campaigns/new-insertion-order']);
  }

  createSelectLineItems() {
    this.router.navigate(['advertiser/campaigns/select-line-items']);
  }

}
