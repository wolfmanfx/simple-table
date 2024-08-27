import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TableColumnDirective } from './table/table-column.directive';
import { DateColumnComponent } from './date-column.component';
import { User } from './user-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TableComponent, TableColumnDirective, DateColumnComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showId = signal(true);

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', date: '2024-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2024-01-01'  },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', date: '2024-01-01'  },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', date: '2024-01-01'  },
  ];

  hide(user: User) {
    console.log('Hide user:', user);
    this.showId.set(false);
  }

  show(user: User) {
    console.log('Show user:', user);
    this.showId.set(true);
  }
}
