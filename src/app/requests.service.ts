import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { LoginData } from "./classes/login-data"


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private apiUrl = "https://pruebatecnica.puntosleal.com/";

  constructor(private http: HttpClient) {}

  login(loginData: LoginData) {
    return this.http.post(`${this.apiUrl}api/user/login`, loginData);
  }

  getTransactions(token: string, startDate?: string, endDate?: string) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      "Authorization": `Bearer ${token}`
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict) 
    };
    let url = `${this.apiUrl}api/user/my/transactions?`;
    if(startDate && startDate !== '') {
      url += `startDate="${startDate}"`;
      if(endDate && endDate !== '') {
        url += `&endDate="${endDate}"`;
      }
    } else {
      if(endDate && endDate !== '') {
        url += `endDate="${endDate}"`;
      }
    } 
    return this.http.get(url, requestOptions);
  }
}
