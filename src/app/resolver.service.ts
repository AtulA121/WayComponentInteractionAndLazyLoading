import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AgeService } from './age.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{
  constructor(private _servce : AgeService) { }
  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    return this._servce.getData();    
  }
}