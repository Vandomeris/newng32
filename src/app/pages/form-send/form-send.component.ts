import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-send',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-send.component.html',
  styleUrl: './form-send.component.scss'
})
export class FormSendComponent {

  constructor(private http: HttpClient) { }


  postForm = new FormGroup({
    userId: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  })


  sendForm() {
    console.log('Форма отпрвилась');
    console.log(this.postForm.value);


    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      ...this.postForm.value
    }
    ).subscribe((data) => console.log(data))
  }

}
