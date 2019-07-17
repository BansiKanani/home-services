import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-existing-workers',
  templateUrl: './existing-workers.component.html'
})
export class ExistingWorkersComponent implements OnInit, OnDestroy {
  subscription;
  workersArray: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const rootUrl = 'http://localhost:3000/api/workers';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.subscription = this.http.get<any[]>(`${rootUrl}?isVerified=true`, { headers }).subscribe(
      value => {
        this.workersArray = value;
        console.log(this.workersArray);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(workerId) {
    const rootUrl = 'http://localhost:3000/api/workers';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.subscription = this.http
      .delete(`${rootUrl}/${workerId}`, { headers })
      .subscribe(
        value => {
          console.log('Deleted One Worker');
          setTimeout(() => {
            this.workersArray = this.workersArray.filter(worker => worker._id !== workerId);
          }, 500);
        },
        err => console.error(err)
      );
  }
}
