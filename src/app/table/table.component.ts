import { Component, contentChildren, input } from '@angular/core';
import { TableColumnDirective } from './table-column.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [TableColumnDirective, CommonModule],
  styles: [`
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  `]
})
export class TableComponent {
  data = input.required<any[]>();
  columnDefs = contentChildren(TableColumnDirective);
}

