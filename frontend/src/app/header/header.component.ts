import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  logoutDisabled = false;
  logout() {
    this.router.navigate(['/app-login']);
  }
  ngOnInit(): void {
    this.router.events.subscribe((url: any) => {
      console.log(url.url);
      if (url.url === '/app-login') {
        this.logoutDisabled = true;
      } else if (url.url != null) {
        this.logoutDisabled = false;
      }
    });
  }
}
