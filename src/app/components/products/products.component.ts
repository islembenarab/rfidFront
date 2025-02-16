import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ReusableTableComponent} from '../../shared/components/reusable-table/reusable-table.component';

@Component({
  selector: 'app-products',
  imports: [
    ReusableTableComponent
  ],
  templateUrl: './products.component.html',
  standalone: true,
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // List of readers
  columns: { key: string; header: string }[] = [];
  currentPage = 0; // Current page (0-based index)
  pageSize = 10; // Number of items per page
  totalElements = 0; // Total number of items
  totalPages = 0; // Total number of pages
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to MatPaginator

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();}


  private loadProducts() {
    this.productService.getProducts(this.currentPage,this.pageSize).subscribe({
      next: (response) => {
        this.products = response.content; // Update the list of readers
        this.totalElements = response.page.totalElements; // Update total elements
        this.totalPages = response.page.totalPages; // Update total pages
        // Dynamically generate columns from the first product
        if (this.products.length > 0) {
          this.columns = Object.keys(this.products[0]).map((key) => ({
            key: key,
            header: this.formatHeader(key), // Format the header (e.g., "productName" -> "Product Name")
          }));
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
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
    this.loadProducts(); // Fetch readers for the new page
  }

}
