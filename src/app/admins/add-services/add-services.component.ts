import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit, OnDestroy {
  subscription;
  addServiceForm;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.addServiceForm = this.formBuilder.group({
      service_name: '',
      service_description: ''
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmit(serviceData) {
    const rootUrl = 'https://home-services-api.herokuapp.com/api/services';
    const body = { name: serviceData.service_name, description: serviceData.service_description };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.addServiceForm.reset();
    this.subscription = this.http.post(rootUrl, body, { headers }).subscribe(
      value => {
        console.log(value);
      },
      err => console.error(err)
    );
    // console.log(serviceData);
  }
}
