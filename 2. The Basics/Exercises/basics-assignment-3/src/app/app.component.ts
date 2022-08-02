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
    this.logs.push(this.logs.length+1);
  }

  changeColor() {
    return this.logs.length > 4 ? 'blue' : '';
  }
}
