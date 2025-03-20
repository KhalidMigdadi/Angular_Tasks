import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  message: string = "Welcome to Angular Pipes";

  value: number = 1234.567;

  date = new Date(2025, 2, 19, 14, 30);  // 19th March, 2025 at 14:30


  myArray = [
    { id: 1, name: 'Khalid' },
    { id: 2, name: 'Ayman' },
    { id: 3, name: 'Bilal' }
  ];


  myArray1 = [10, 20, 30, 40, 50];



  myObject = {
    id: 1,
    name: 'John Doe',
    age: 30,
    profession: 'Engineer'
  };


}
