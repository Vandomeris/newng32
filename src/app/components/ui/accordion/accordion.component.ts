import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  data = [
    { title: 'Аккордеон 1', body: 'Текст аккордеона 1' },
    { title: 'Аккордеон 2', body: 'Текст аккордеона 2' },
    { title: 'Аккордеон 3', body: 'Текст аккордеона 3' },
  ]

  show: boolean = false
  activeItem?: number

  showItem(index: number) {

    if (this.activeItem === index && this.show === true) {
      this.show = false
      return
    }

    this.activeItem = index
    this.show = true

  }
}
