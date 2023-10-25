import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  products: any[] = [];

  constructor(private _tableService: tableService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this._tableService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  searchTerm: string = '';
  filteredProducts: any[] = [];

  filterProducts(): void {
    if (!this.searchTerm) {
      this.filteredProducts = [];
      return;
    }
    const limit = parseInt(this.searchTerm, 10); // Convertir el término de búsqueda en un número entero
    this.filteredProducts = this.products.slice(0, limit); // Mostrar la cantidad específica de productos según el término de búsqueda
  }
}
