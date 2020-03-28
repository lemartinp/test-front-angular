import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from './requests.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  FormsModule,
  HttpClientModule,
  MatIconModule,
  MatListModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [...modules],
  entryComponents: [
    DialogComponent
  ],
  providers: [RequestsService, HttpClientModule, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
