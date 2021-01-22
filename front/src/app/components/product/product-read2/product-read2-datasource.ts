import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './../product.model';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 100.92 },
  {id: 2, name: 'Helium', price: 100.92 },
  {id: 3, name: 'Lithium', price: 100.92 },
  {id: 4, name: 'Beryllium', price: 100.92 },
  {id: 5, name: 'Boron', price: 100.92 },
  {id: 6, name: 'Carbon', price: 100.92 },
  {id: 7, name: 'Nitrogen', price: 100.92 },
  {id: 8, name: 'Oxygen', price: 100.92 },
  {id: 9, name: 'Fluorine', price: 100.92 },
  {id: 10, name: 'Neon', price: 100.92 },
  {id: 11, name: 'Sodium', price: 100.92 },
  {id: 12, name: 'Magnesium', price: 100.92 },
  {id: 13, name: 'Aluminum', price: 100.92 },
  {id: 14, name: 'Silicon', price: 100.92 },
  {id: 15, name: 'Phosphorus', price: 100.92 },
  {id: 16, name: 'Sulfur', price: 100.92 },
  {id: 17, name: 'Chlorine', price: 100.92 },
  {id: 18, name: 'Argon', price: 100.92 },
  {id: 19, name: 'Potassium', price: 100.92 },
  {id: 20, name: 'Calcium', price: 100.92 },
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductRead2DataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
