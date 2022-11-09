import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu: boolean = false;

  constructor() {}

  ToggleSideMenu() {
    this.showMenu = !this.showMenu;
    // console.log(this.showMenu);
  }
}
