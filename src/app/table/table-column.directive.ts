import { Directive, inject, input, TemplateRef } from "@angular/core";

@Directive({
  selector: '[appTableColumn]',
  standalone: true
})
export class TableColumnDirective {
  headerName = input('', { alias: 'appTableColumnHeaderName' });
  propName = input('', { alias: 'appTableColumnAs' });
  templateRef = inject(TemplateRef<unknown>);
}
