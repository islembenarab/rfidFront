import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {LeftSideBarComponent} from './components/left-side-bar/left-side-bar.component';
import {ApiUrlService} from './services/api-url.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSideBarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rfIdFront';

  constructor(private apiUrlService: ApiUrlService, private router: Router) {
  }

  ngOnInit(): void {
    const apiUrl = this.apiUrlService.getApiUrl();
    if (!apiUrl) {
      this.router.navigate(['/dashboard']);
    }
  }
}
