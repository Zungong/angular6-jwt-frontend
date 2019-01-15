import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator, MatFormField, MatDatepicker } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  displayedColumns = ['name', 'surname', 'total_amount', 'details'];
  dataSourcePayment;
  payments$: Payment[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pays: PaymentService) { }

  ngOnInit() {
    this.pays.getPayments('', '').subscribe(res => {
      this.payments$ = res.data.facilities_managers;
      this.dataSourcePayment = new MatTableDataSource<Payment>(this.payments$);
      this.dataSourcePayment.paginator = this.paginator;
    });
  }

  setRange(start_date: string, end_date: string): void {
    this.pays.getPayments(start_date.split('/').join('-'), end_date).subscribe(res => {
      this.payments$ = res.data.facilities_managers;
      this.dataSourcePayment = new MatTableDataSource<Payment>(this.payments$);
      this.dataSourcePayment.paginator = this.paginator;
    });
  }

  toggleDetails(el: Payment): void {
    el.expanded = !el.expanded;
  }

}
