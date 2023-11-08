import { Component } from '@angular/core';
import { PopUpDataService } from '../pop-up-data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-get-data-button',
  templateUrl: './get-data-button.component.html',
  styleUrls: ['./get-data-button.component.scss']
})
export class GetDataButtonComponent {
   ref!:DynamicDialogRef;
   userData:any[]=[];
  constructor(public dialogService:DialogService,public dataService:PopUpDataService,public popup:PopUpComponent){}

  show() {
    this.ref = this.dialogService.open(PopUpComponent, { header: 'User Data',
  closable:true});
}
  display(){
    this.userData=this.dataService.getTable();
    if(this.userData && this.userData.length>0){
      console.log(this.dataService.getTable())
      return true
    }
    else{
      return false
    }
  }
}
