import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  constructor() {

    effect(() => {
      console.log('Вы ввели:' + this.rubles());
    })

  }


  rubles = signal('')
  course = 93
  dollars = computed(() => {
    return Number(this.rubles()) / this.course
  })

  // onClick() {
  //   this.rubles.set(200)
  // }

}
