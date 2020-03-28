import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Transaction } from './dashboard.component';

import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogComponent } from '../dialog/dialog.component';
import { HomeComponent } from '../home/home.component';
import { DebugElement } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;

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
    MatGridListModule,
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, DialogComponent, HomeComponent ],
      imports: [...modules],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have two input fields for the dates filter', () => {
    expect(de.queryAll(By.css('input')).length).toBe(2);
  })
  it('should contain a button with text "Filtrar"', () => {
    expect(de.query(By.css('button')).nativeElement.textContent).toBe('Filtrar');
  });
  describe('list', () => {
    beforeEach(fakeAsync(() => {
      const deMatList = de.query(By.css("mat-list"));
      const el = deMatList.nativeElement;
      const transactions = [
        { value:0,points:10,type:"redeem",createdDate: new Date("2018-11-08T19:15:00.000Z") },
        { value:10000,points:10,type:"earn",createdDate: new Date("2018-11-05T15:15:00.000Z") },
        { value:34200,points:34,type:"earn",createdDate: new Date("2018-11-05T15:00:00.000Z") },
        { value:5000,points:5,type:"earn",createdDate: new Date("2018-11-04T15:00:00.000Z") }
      ]
      component.transactions = transactions;
  
      var event = new Event('mat-list', {
        'bubbles': true,
        'cancelable': true
      });
      el.dispatchEvent(event);
  
      tick();
  
      fixture.detectChanges();
    }));
    it('should have a mat-list-item for every transaction', () => {
      expect(de.queryAll(By.css('mat-list-item')).length).toBe(4);
    });
    it('should render "check_circle" icon if the transaccion is of type "redeem" and "local_hospital" if the type is "earn"', () => {
      let success = true;
      let iconsList = de.queryAll(By.css('mat-icon')).map((deMatIcon) => (deMatIcon.nativeElement.textContent));
      iconsList.forEach((icon, index) => {
        if ((icon === 'check_circle'? 'redeem': 'earn') !== component.transactions[index].type)
          success = false;
      });
      expect(success).toBe(true);
    });
  })
});
