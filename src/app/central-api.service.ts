import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentralApiService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://api.countapi.xyz/hit/fearless/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

  
}
