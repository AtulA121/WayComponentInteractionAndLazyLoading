import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgeService {
  public age=new Subject<String>();
  public event=this.age.asObservable();

  constructor(private _http : HttpClient) { }

  public changeAge(data : any){
    this.age.next(data);  
  }

  public getData() : Observable<any>{
    return this._http.get("http://localhost:8080/getData");
  }

}
