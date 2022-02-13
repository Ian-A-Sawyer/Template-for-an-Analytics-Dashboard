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

  checkLength() {
    const n: number = this.currentCount;

    const bool: boolean = n > 0;

    return bool;
  }

  retrieveCount(e: any) {
    this.api.retrieveResponse().subscribe((res: any) => {
      const value: any = res['value'];

      this.currentCount = value;
    });
  }

  ionViewDidEnter() {

  }
}
