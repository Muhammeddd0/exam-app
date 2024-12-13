
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideNavComponent } from '../../../features/components/side-nav/side-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[SideNavComponent , RouterOutlet]
})
export class HomeComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription = new Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    if (currentUrl === '/auth/login' || currentUrl === '/auth/register') {
      localStorage.removeItem('token');
      
    }

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/auth/login' || event.url === '/auth/signup') {
          localStorage.removeItem('token');
          // console.log('Token has been cleared because user is navigating to login/signup.');
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}