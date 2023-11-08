import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpDataService {

  constructor() { }

  user:any[]=[];

  setTable(userData:any){
      this.user.push(userData);
  }
  
  getTable(){
     return this.user;
  }

}
