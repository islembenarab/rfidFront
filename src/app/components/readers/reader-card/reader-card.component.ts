import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ReadersService } from '../../../services/readers.service';

@Component({
  selector: 'app-reader-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardImage,
    MatSlideToggle,
  ],
  templateUrl: './reader-card.component.html',
  standalone: true,
  styleUrl: './reader-card.component.css',
})
export class ReaderCardComponent {
  @Input() reader: any; // Input property to pass reader data
  @Output() toggleChanged = new EventEmitter<void>(); // Event to notify parent component

  constructor(private readerService: ReadersService) {}

  onToggleConnect($event: MatSlideToggleChange, reader: any) {
    console.log('Toggle connect:', $event.checked);
    if ($event.checked) {
      this.readerService.connectReader(reader.id).subscribe(() => {
        this.toggleChanged.emit(); // Notify parent to reload readers
      });
    } else {
      this.readerService.disconnectReader(reader.id).subscribe(() => {
        this.toggleChanged.emit(); // Notify parent to reload readers
      });
    }
  }
}
