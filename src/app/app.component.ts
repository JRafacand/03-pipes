import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string='Batman';
  array =[1,2,4,4,5,6,7,8,9,10];
  PI:number=Math.PI;
}
