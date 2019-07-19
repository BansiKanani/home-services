import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';

    const x = document.getElementById('menu');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  constructor() {}

  ngOnInit() {}
}
