import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  constructor(private http:Http) { }
}
