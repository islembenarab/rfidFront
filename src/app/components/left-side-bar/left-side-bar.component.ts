import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-left-side-bar',
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './left-side-bar.component.html',
  standalone: true,
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent implements OnInit {
  sidebarItems: any[] = [];
  currentRole: string = 'user';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Get the current role from the AuthService
    this.currentRole = this.authService.getRole();
    console.log(this.currentRole)
    // Listen for route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reset sidebar items
        this.sidebarItems = [];

        // Get the full route configuration
        const routes = this.router.config;
        // Get the sidebar data from the route configuration
        routes.forEach((route) => {
          if (route.data && route.data['place'] === 'sidebar') {
            // Check if the current role is allowed to see the route
            if (route.data['roles'].includes(this.currentRole)) {
              this.sidebarItems.push(route);
            }
          }
        })
      });
  }
}
