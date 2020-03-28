import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RequestsService } from '../requests.service';
import { LoginData } from '../classes/login-data';

export interface DialogData {
  type: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // I left this public just to prove a ngmodel test (4th test on home.component.spec.ts)
  public username: string;
  private password: string;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private requestsService: RequestsService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  login() {
    if (this.username === '' || this.password === ''){
      let dialogRef = this.dialog.open(DialogComponent, {
        data: { type: 'missing' },
      }); 
    } else {
      let loginData: LoginData = new LoginData(this.username, this.password);
      this.requestsService.login(loginData).subscribe((response) => {
        sessionStorage.setItem('token', response['token']);
        this.router.navigate(['/dashboard/']);
      },
      (error) => {
        if(error.error.code === 101) {
          let dialogRef = this.dialog.open(DialogComponent, {
            data: { type: 'incorrect' },
          });
        }
        if(error.error.code === 102) {
          let dialogRef = this.dialog.open(DialogComponent, {
            data: { type: 'serverError' },
          });
        } 
      });
    }
  }

}
