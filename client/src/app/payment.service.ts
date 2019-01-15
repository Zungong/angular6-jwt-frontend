import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) { }

  getPayments(start_date: string, end_date: string) {
    if (!start_date) {
      start_date = '0';
    }
    if (!end_date) {
      end_date = '2099';
    }
    return this.http.get<any>('/api/bookings_payments', { params: {'start_date': start_date, 'end_date': end_date}});
  }

}
