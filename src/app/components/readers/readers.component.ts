import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ReadersService } from '../../services/readers.service';
import { NgForOf, NgIf } from '@angular/common';
import { ReaderCardComponent } from './reader-card/reader-card.component';

@Component({
  selector: 'app-readers',
  imports: [MatPaginator, NgIf, NgForOf, ReaderCardComponent],
  templateUrl: './readers.component.html',
  standalone: true,
  styleUrl: './readers.component.css',
})
export class ReadersComponent implements OnInit {
  readers: any[] = []; // List of readers
  currentPage = 0; // Current page (0-based index)
  pageSize = 10; // Number of items per page
  totalElements = 0; // Total number of items
  totalPages = 0; // Total number of pages
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to MatPaginator

  constructor(private readerService: ReadersService) {}

  ngOnInit(): void {
    this.loadReaders();
  }

  // Fetch readers for the current page
  loadReaders(): void {
    this.readerService.getReaders(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.readers = response.content; // Update the list of readers
        this.totalElements = response.page.totalElements; // Update total elements
        this.totalPages = response.page.totalPages; // Update total pages
        console.log('Readers:', this.readers);
      },
      error: (error) => {
        console.error('Error fetching readers:', error);
      },
    });
  }

  // Handle page change event
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex; // Update the current page
    this.pageSize = event.pageSize; // Update the page size
    this.loadReaders(); // Fetch readers for the new page
  }

  // Reload readers when toggle is changed
  onToggleChanged(): void {
    console.log('Toggle changed');
    this.loadReaders();
  }
}
