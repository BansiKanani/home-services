import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worker-login',
  templateUrl: './worker-login.component.html',
  styleUrls: ['./worker-login.component.scss']
})
export class WorkerLoginComponent {
  constructor(private cookie: CookieService, private http: HttpClient) {}

  onLogIn() {
    this.http.get('https://home-services-api.herokuapp.com/api/workers').subscribe(
      worker => {
        this.cookie.set('workerId', worker[0]._id);
        this.cookie.set('workerName', worker[0].name);
        // console.log(JSON.parse(this.cookie.get('worker')));
      },
      err => console.error(err)
    );
  }

  onLogOut() {
    this.cookie.delete('worker');
  }
}
