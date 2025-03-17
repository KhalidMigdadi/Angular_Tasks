import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private http: HttpClient) { }

  onSubmit(data: any) {
    this.http.post('https://67cea6ee125cd5af757b6514.mockapi.io/Users', data).subscribe((result) => {
      console.warn("result: ", result);
    })
    console.warn(data);
  }

}
