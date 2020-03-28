import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

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

    TestBed.configureTestingModule({
      declarations: [ DialogComponent, DashboardComponent, HomeComponent ],
      imports: [ ...modules ],
      providers: [ 
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { 
          type: "info", 
          value:0,
          points:10,
          transType:"redeem",
          createdDate: new Date("2018-11-08T19:15:00.000Z") 
        } } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have four items to show the details of the selected transaction', () => {
    expect(de.queryAll(By.css('mat-list-item')).length).toBe(4);
  });
});
