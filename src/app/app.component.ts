import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {LeftSideBarComponent} from './components/left-side-bar/left-side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSideBarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rfIdFront';
}
