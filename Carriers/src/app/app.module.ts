import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogService } from 'primeng/dynamicdialog';
import { GetDataButtonComponent } from './get-data-button/get-data-button.component';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { PopUpDataService } from './pop-up-data.service';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    GetDataButtonComponent,
    PopUpComponent,
    DataTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DynamicDialogModule,
    DialogModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  providers: [DialogService,PopUpDataService,PopUpComponent,DynamicDialogRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
