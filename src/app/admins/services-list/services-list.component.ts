import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit, OnDestroy {
  subscription;
  servicesArray: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const rootUrl = 'https://home-services-api.herokuapp.com/api/services';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.subscription = this.http.get<any[]>(rootUrl, { headers }).subscribe(
      value => {
        this.servicesArray = value;
        console.log(this.servicesArray);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(serviceId) {
    const rootUrl = 'https://home-services-api.herokuapp.com/api/services';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.subscription = this.http
      .delete(`${rootUrl}/${serviceId}`, { headers })
      .subscribe(
        value => {
          console.log('Deleted One Service');
          setTimeout(() => {
            this.servicesArray = this.servicesArray.filter(service => service._id !== serviceId);
          }, 500);
        },
        err => console.error(err)
      );
  }
}
