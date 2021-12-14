import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private addUrl = 'https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item';
  private itemsUrl = 'https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item';
  private detailsUrl = 'https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item';

  constructor( private http:HttpClient) { }

  public GetItemsList (){
    return this.http.get<any>(this.itemsUrl)
  }

  public AddItem (payloadData:any){
    return this.http.post<any>(this.addUrl, payloadData);
  }
}
