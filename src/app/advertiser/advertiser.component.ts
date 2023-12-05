// angular import
import { Component, ViewChild, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexMarkers
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-advertiser-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule, NgbDatepickerModule, FormsModule  ],
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.scss']
  
  
})
export default class AdvertiserComponent {

  model: NgbDateStruct = { year: 2023, month: 11, day: 17 }; 
  placement = 'bottom';
  private modalService = inject(NgbModal);
  checkboxStates: boolean[] = [false, false, false, false, false, false, false];
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  chartOptions_1!: Partial<ChartOptions>;
  chartOptions_2!: Partial<ChartOptions>;
  chartOptions_3!: Partial<ChartOptions>;

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

  cards = [
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
      title1: 'Impressions',
      number1: '159,328,290',
      title2: 'Clicks',
      number2: '1,618,478',
      title3: 'CTR',
      number3: '1.02%',
    }       
  ];

  constructor(private router: Router) {

  }

  formatDate(date: NgbDateStruct): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[date.month - 1]} ${date.day}, ${date.year}`;
    return formattedDate;
  }

  createNewCampaigns() {
    this.router.navigate(['advertiser/new-campaigns']);
  }

}
