import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface Transaction {
  value: number;
  points: number;
  type: string;
  createdDate: Date;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  transactions: Transaction[];
  private startDate: string;
  private endDate: string;

  constructor(
    private requestsService: RequestsService,
    private dialog: MatDialog) {
      this.startDate = '';
      this.endDate = '';
    }

  ngOnInit() {
    this.requestsService.getTransactions(sessionStorage.getItem('token')).subscribe((response) => {
      this.transactions = response['data'].map((transaction) => ({...transaction, createdDate: new Date(`${transaction.createdDate}`)}));
    });
  }
  
  showDetail({value, points, type, createdDate}){
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { type: 'info', value, points, transType: type, createdDate},
      width: '70%',
    });
  }

  filter(){
    setTimeout(() => { 
      this.requestsService.getTransactions(sessionStorage.getItem('token'), this.startDate, this.endDate).subscribe((response) => {
        this.transactions = response['data'].map((transaction) => ({...transaction, createdDate: new Date(`${transaction.createdDate}`)}));
      });
     }, 500);
  }
}
