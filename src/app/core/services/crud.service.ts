import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})

export class CrudService<T> {

  public url = "https://localhost:44395";

  constructor(private http: HttpClient) { }

    //category
    public getList(controllerName: string): Observable<T[]> {
      return this.http.get<T[]>(this.url + '/api/' + controllerName);
    }

    public search(controllerName: string, params: any): Observable<T[]> {
      return this.http.get<T[]>(this.url + '/api/' + controllerName, {params:new HttpParams().append("model", JSON.stringify(params ) )});
    }
    
    updateItem(model: T, controllerName: string): Observable<T> {
      return this.http.put<T>(this.url + '/api/' + controllerName, model);
    }

    insertItem(model: T, controllerName: string): Observable<T> {
      return this.http.post<T>(this.url + '/api/' + controllerName, model);
    }

    removeItem(key: number, controllerName: string): Observable<number> {
      return this.http.post<number>(this.url + '/api/' + controllerName + '/' + key.toString(), null);
    }
  
}


