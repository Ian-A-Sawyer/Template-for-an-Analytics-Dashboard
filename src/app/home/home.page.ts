import { Component } from '@angular/core';
import { CentralApiService } from '../central-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentCount: number = 0;

  constructor(private api: CentralApiService) {}


  ionViewDidEnter() {

  }
}
