import { CommonModule, formatCurrency } from '@angular/common';
import { Component,EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {
  public showAddButton = true; 
  @Output() openModal = new EventEmitter<void>();

  onAddClick() {
    this.openModal.emit();
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to check the route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });

    // Initial check
    this.checkRoute();
  }

  checkRoute(): void {
    const currentRoute = this.router.url;
    this.showAddButton = !currentRoute.includes('/candidates');
  }

}
