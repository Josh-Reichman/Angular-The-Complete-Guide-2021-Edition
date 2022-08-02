import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs = [];
  showText = false;

  newLog() {
    this.showText = !this.showText;
    this.logs.push(new Date());
  }

  changeColor() {
    return this.logs.length > 4 ? 'blue' : '';
  }
}
