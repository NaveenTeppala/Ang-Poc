import { Component, OnInit } from '@angular/core';
import { PopUpDataService } from '../pop-up-data.service';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  userData:any;
  constructor(public popup:PopUpDataService,public formData:PopUpComponent){}
  ngOnInit(): void {
    this.userData=this.popup.getTable();
    console.log(this.userData);
  }
    
    
}
