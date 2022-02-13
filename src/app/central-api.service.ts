import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentralApiService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://api.countapi.xyz/hit/fearless/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

  private currentCount: any = '';

  setCurrentCount(count: any) {
    const displayValue: any = count;

    this.currentCount = displayValue;
  }

  getCurrentCount() {
    const displayValue: any = this.currentCount;

    return displayValue;
  }

  retrieveResponse() {
    const apiUrl: any = this.apiUrl;

    return this.http.get(apiUrl);
  }
}
