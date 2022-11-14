import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() EmitshowMenu = new EventEmitter<MouseEvent>();
  avshaClass = 'avsha';
  logo: string[] = ['n', 'g', 'u', 'l', 'a', 'r', ' ', 'S', 'h', 'o', 'p'];
  letersColor: string[] = [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
  ];
  r = 0;
  g = 0;
  b = 0;
  a = 0;

  constructor() {}

  ngOnInit(): void {}

  oneOflinksPreesed() {
    this.EmitshowMenu.emit();
  }

  cngColor(i: number) {
    this.randomCol();
    this.letersColor[i] = `rgba(${this.r},${this.g},${this.b},1)`;
    // console.log(i);
  }

  randomCol() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.a = 1;
  }
}
