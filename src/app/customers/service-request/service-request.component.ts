import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent {
  selectedService = 'Electrician';
  body;
  headers;
  rootUrl;
  subscription;
  serviceRequestForm;
  constructor(private http: HttpClient, private cookie: CookieService, private formBuilder: FormBuilder) {
    this.serviceRequestForm = this.formBuilder.group({
      name: JSON.parse(this.cookie.get('customer')).name,
      address: JSON.parse(this.cookie.get('customer')).address,
      pincode: JSON.parse(this.cookie.get('customer')).pincode,
      phone: JSON.parse(this.cookie.get('customer')).phone,
      email: JSON.parse(this.cookie.get('customer')).email,
      description: ''
    });
    this.selectedService = JSON.parse(this.cookie.get('service')).name;
    // this.saveServiceObj();
  }

  sendRequest(customerData) {
    const rootUrl = 'http://localhost:3000/api/orders';
    const body = {
      customerId: JSON.parse(this.cookie.get('customer'))._id,
      serviceId: JSON.parse(this.cookie.get('service'))._id,
      description: customerData.description,
      date: new Date(),
      address: customerData.address,
      pincode: customerData.pincode,
      phone: customerData.phone,
      status: 'ordered',
      workerId: null
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.serviceRequestForm.reset();
    this.subscription = this.http.post(rootUrl, body, { headers }).subscribe(
      value => {
        console.log(value);
      },
      err => console.error(err)
    );
  }

  removeUser() {
    this.cookie.delete('serviceId');
    this.cookie.delete('serviceName');
  }

  saveServiceObj() {
    this.http
    .get('http://localhost:3000/api/services')
    .subscribe(
      service => {
        this.cookie.set('service', JSON.stringify(service[0]));
        // console.log(JSON.parse(this.cookie.get('customer')));
      },
      err => console.error(err)
    );
  }
}
