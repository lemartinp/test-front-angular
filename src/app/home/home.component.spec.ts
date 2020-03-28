import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { HomeComponent } from './home.component';
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
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DebugElement } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
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
      declarations: [ HomeComponent, DashboardComponent, DialogComponent ],
      imports: [...modules],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have two input fields for email and password', () => {
    expect(de.queryAll(By.css('input')).length).toBe(2);
  })
  it('should have the second input tag to be of type password', () => {
    expect(de.queryAll(By.css('input'))[1].nativeElement.type).toBe('password');
  });
  it('should properly bind the value of the first input to the variable username', fakeAsync(() => {
    const deInput = de.query(By.css("input"));
    const el = deInput.nativeElement;

    el.value = 'My username';

    var event = new Event('input', {
      'bubbles': true,
      'cancelable': true
    });
    el.dispatchEvent(event);

    tick();

    fixture.detectChanges();

    expect(component.username).toEqual('My username');
  }));
  it('should contain a button with text "Ingresar"', () => {
    expect(de.query(By.css('button')).nativeElement.textContent).toBe('Ingresar');
  });
});
