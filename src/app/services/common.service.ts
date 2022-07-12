import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomePage } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
private url = environment.server;
  constructor(private http:HttpClient) { }

  getHomedata(){
    return this.http.get<HomePage>(this.url + '/api/homepage?populate=*');
  }
}
