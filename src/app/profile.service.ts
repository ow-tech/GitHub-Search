import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid-'Iv1.394bac6b6094525f';
  private clientsecret:'901a5bfed068ccd1b2d841158e719b308d8f2214';
  
  constructor(private http:Http) { }
}
