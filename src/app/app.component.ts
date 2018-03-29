import { Component } from '@angular/core';

@Component({
  selector: 'app-cts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Study';
  name='deboleena'
  num1=15;
  num2=13;
  displayDate=function()
  {
    return new Date();
  }
}
