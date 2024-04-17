import { Component } from '@angular/core';
import { CollapseComponent } from '../../components/ui/collapse/collapse.component';
import { AccordionComponent } from '../../components/ui/accordion/accordion.component';

@Component({
  selector: 'app-ui-test',
  standalone: true,
  imports: [CollapseComponent, AccordionComponent],
  templateUrl: './ui-test.component.html',
  styleUrl: './ui-test.component.scss'
})
export class UiTestComponent {

}