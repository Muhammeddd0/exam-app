import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button'; // Import ButtonModule
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-side-nav', 
  standalone: true,
  imports: [RouterLink, CommonModule, ConfirmPopupModule, ButtonModule],
  providers: [ConfirmationService],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})


  export class SideNavComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'fa-solid fa-grip', routerLink: '/dashboard' },
    { label: 'Quiz History', icon: 'fa-solid fa-clock-rotate-left', routerLink: '/quiz' },
    { label: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket' }
  ];


  selectedItem: number = 0;

  constructor(private router: Router, private confirmationService: ConfirmationService) {}

  setActiveItem(index: number): void {
    this.selectedItem = index;
  }

  showConfirmPopup(event: Event): void {
    event.preventDefault(); 
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Are you sure you want to logout?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.logout();
      },
      reject: () => {
        console.log('Logout canceled');
      }
    });
  }

  logout(): void {
    localStorage.removeItem('authToken'); 
    this.router.navigate(['/auth/login']); 
  }
}

