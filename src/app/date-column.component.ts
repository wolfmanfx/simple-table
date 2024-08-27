import { DatePipe } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-date-column",
  standalone: true,
  imports: [DatePipe],
  template: ` {{ date() | date : "dd/MM/yyyy" }} `,
})
export class DateColumnComponent {
  date = input.required<string>();
}
