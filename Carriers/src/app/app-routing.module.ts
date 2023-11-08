import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataButtonComponent } from './get-data-button/get-data-button.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {path:'',redirectTo:'button',pathMatch:'full'},
  {path:'button',component:GetDataButtonComponent},
  {path:'table',component:DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
