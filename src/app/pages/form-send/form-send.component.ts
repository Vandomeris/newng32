import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-send',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-send.component.html',
  styleUrl: './form-send.component.scss'
})
export class FormSendComponent {

  constructor(private http: HttpClient) { }

  userId?: number
  title?: string
  body?: string

  sendForm() {
    console.log('Форма отпрвилась');

    this.http.post('api/test',
      {
        'userId': this.userId,
        'title': this.title,
        'body': this.body
      },
    ).subscribe((data) => console.log(data))
  }

}
