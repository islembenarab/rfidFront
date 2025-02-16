import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css'],
  imports: [
    MatPaginator,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatHeaderRow,
    MatTable,
    NgForOf,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
  ],
  standalone: true,
})
export class ReusableTableComponent implements OnChanges {
  @Input() data: any[] = []; // Input for table data
  @Input() columns: { key: string; header: string }[] = []; // Input for column definitions
  @Input() totalItems: number = 0; // Total number of items for pagination
  @Input() pageSize: number = 10; // Items per page
  @Input() pageIndex: number = 0; // Current page index

  @Output() pageChange = new EventEmitter<PageEvent>(); // Emit pagination changes

  displayedColumns: string[] = []; // Columns to display in the table

  // Handle input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.map((column) => column.key);
    }
  }

  // Handle pagination changes
  onPageChange(event: PageEvent): void {
    this.pageChange.emit(event);
  }
}
