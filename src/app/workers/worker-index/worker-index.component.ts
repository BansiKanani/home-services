import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worker-index',
  templateUrl: './worker-index.component.html',
  styleUrls: ['./worker-index.component.scss']
})
export class WorkerIndexComponent implements OnInit, OnDestroy {
  sub;
  workerObj;
  constructor(private cookie: CookieService, private http: HttpClient) {}

  ngOnInit() {
    this.sub = this.http.get(`https://home-services-api.herokuapp.com/api/workers`).subscribe( val => { this.workerObj = val[0]; }, err => console.log(err) );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
