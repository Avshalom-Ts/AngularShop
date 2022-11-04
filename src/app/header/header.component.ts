import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() EmitshowMenu = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  amburgerToggle(e: MouseEvent) {
    this.EmitshowMenu.emit(e);
    // console.log(e);
  }
}
