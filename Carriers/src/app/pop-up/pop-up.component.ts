import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpDataService } from '../pop-up-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent  implements OnInit {
   reactiveForm:FormGroup;
   ValidationOptions:string[]=['true','false'];

  ngOnInit(): void {
    this.reactiveForm=new FormGroup(
      {
        firstname: new FormControl(null,Validators.required),
        lastname:new FormControl(null,Validators.required),
        vechileno:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]*$')]),
        validation:new FormControl(null,Validators.required)
      }
    )
    
  }
  
  user:any[]=[];
  closepopUp:any=false
  constructor(private router:Router,public dialogService:DialogService,private dynamicRef:DynamicDialogRef,public popup:PopUpDataService){
  }
  
  onSubmit(){
    
    console.log(this.reactiveForm);
    if(this.reactiveForm){
      console.log(this.reactiveForm.value);
      this.user.push(this.reactiveForm.value);
      console.log(this.user);
    }
    this.popup.setTable(this.reactiveForm.value);
    this.dynamicRef.close();
  }
  
  get firstName(){
    return this.reactiveForm.get('firstname');
  }
  get lastName(){
    return this.reactiveForm.get('lastname');
  }
  get vechileNo(){
    return this.reactiveForm.get('vechileno');
  }
  get Validation(){
    return this.reactiveForm.get('validation');
  }
}
