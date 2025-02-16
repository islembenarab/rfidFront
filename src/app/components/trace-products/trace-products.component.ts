import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TraceProductsService} from '../../services/trace-products.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ReusableTableComponent} from '../../shared/components/reusable-table/reusable-table.component';

@Component({
  selector: 'app-trace-products',
  imports: [
    ReusableTableComponent
  ],
  templateUrl: './trace-products.component.html',
  standalone: true,
  styleUrl: './trace-products.component.css'
})
export class TraceProductsComponent implements OnInit ,OnDestroy {
  constructor(private traceProduct:TraceProductsService) {}


  traces: any[] = []; // List of trace products
  columns: { key: string; header: string }[] = [];
  currentPage = 0; // Current page (0-based index)
  pageSize = 10; // Number of items per page
  totalElements = 0; // Total number of items
  totalPages = 0; // Total number of pages
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to MatPaginator

  ngOnInit(): void {
    this.loadTraceProducts();
    this.traceProduct.getServerSentEvents().subscribe({
      next: (data) => {
        // Find the index of the trace in the traces array
        // let tag = JSON.parse(data.data);
        // const index = this.traces.findIndex((trace) => trace.epc === tag.epc); // Use findIndex instead of find
        // console.log('Index:', index);
        // if (index !== -1) {
        //   // Update the trace at the found index
        //   this.traces[index] = { ...this.traces[index], ...tag }; // Immutable update
        //
        //   // Create a new array to trigger Angular's change detection
        //   this.traces = [...this.traces];
        //
        //   console.log('Updated trace:', this.traces[index], 'with index:', index);
        // }else {
        //   // Add the new trace to the beginning of the array
        //   this.traces = [tag, ...this.traces];
        // }
        this.loadTraceProducts();
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }

  private loadTraceProducts() {
    this.traceProduct.getTraceProducts().subscribe({
      next: (response) => {
        this.traces = response.content; // Update the list of trace products
        this.totalElements = response.page.totalElements; // Update total elements
        this.totalPages = response.page.totalPages; // Update total pages
        // Dynamically generate columns from the first product
        if (this.traces.length > 0) {
          this.columns = Object.keys(this.traces[0]).map((key) => ({
            key: key,
            header: this.formatHeader(key), // Format the header (e.g., "productName" -> "Product Name")
          }));
        }
      },
      error: (error) => {},
    });
  }
  // Format the header (e.g., "productName" -> "Product Name")
  private formatHeader(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  }
  // Handle page change event
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex; // Update the current page
    this.pageSize = event.pageSize; // Update the page size
    this.loadTraceProducts(); // Fetch readers for the new page
  }

  ngOnDestroy(): void {
    this.traceProduct.closeConnection();
  }
}
