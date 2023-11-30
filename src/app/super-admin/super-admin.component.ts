// angular import
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-super-admin-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule, NgbDatepickerModule, FormsModule  ],
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
  
})


export default class SuperAdminComponent {
  
  isSwitchOn = false; 
  model: NgbDateStruct = { year: 2023, month: 11, day: 17 }; 
  placement = 'bottom';
  checkboxStates: boolean[] = [false, false, false, false, false, false, false];
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  chartOptions_1!: Partial<ChartOptions>;
  chartOptions_2!: Partial<ChartOptions>;
  chartOptions_3!: Partial<ChartOptions>;
  selectedValue: string = '';
  optionMenuActive: boolean = false;
  
  currencies: Currency[] = [
    { value: 'usd', viewValue: '$' },
    { value: 'eur', viewValue: '€' },
    { value: 'gbp', viewValue: '£' },
    { value: 'jpy', viewValue: '¥' },
    { value: 'aud', viewValue: '$' },
    { value: 'cad', viewValue: '$' },
    { value: 'cny', viewValue: '元' },
    { value: 'sek', viewValue: 'kr' },
    { value: 'nzd', viewValue: '$' },
    { value: 'sgd', viewValue: '$' },
    { value: 'hkd', viewValue: 'HK$' },
    { value: 'nok', viewValue: 'kr' },
    { value: 'mxn', viewValue: '$' },
    { value: 'inr', viewValue: '₹' },
    { value: 'brl', viewValue: 'R$' },
    { value: 'zar', viewValue: 'R' },
    { value: 'rub', viewValue: '₽' },
    { value: 'try', viewValue: '₺' },
    { value: 'krw', viewValue: '₩' },
    { value: 'aed', viewValue: 'د.إ' },
    { value: 'sar', viewValue: '﷼' },
    { value: 'idr', viewValue: 'Rp' },
  ];

  
  constructor(private router: Router) {
    
    this.chartOptions_1 = {
      chart: {
        height: 240,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '40%'
          }
        }
      },
      labels: ['Inactive', 'Deactivated'],
      series: [2147, 310],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'datk'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#4680ff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };  
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [30, 45.2, 44, 45, 78, 87, 98.5, 65, 100.4, 121, 87, 124.54]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false 
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        labels: {
          show: true
        }
      }
    };

  }

  formatDate(date: NgbDateStruct): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[date.month - 1]} ${date.day}, ${date.year}`;
    return formattedDate;
  }

  createAdmin() {
    this.router.navigate(['/admin']);
  }

  toggleOptionMenu() {
    this.optionMenuActive = !this.optionMenuActive;
  }

  selectCurrency(currency: Currency) {
    this.selectedValue = currency.viewValue;
    this.optionMenuActive = false;
  }
  
  ngOnInit() {
    this.selectedValue = this.currencies[0].viewValue;
  }
}

interface Currency {
  value: string;
  viewValue: string;
}