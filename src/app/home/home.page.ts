import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataSource: any;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      data: [
        { label: 'Venezuela', value: '290' },
        { label: 'Saudi', value: '260' },
        { label: 'Canada', value: '180' },
        { label: 'Iran', value: '140' },
        { label: 'Russia', value: '115' },
        { label: 'UAE', value: '100' },
        { label: 'US', value: '30' },
        { label: 'China', value: '30' }
      ]
    };
  }
}