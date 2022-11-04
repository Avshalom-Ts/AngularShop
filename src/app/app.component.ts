import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu: boolean = false;
  products = [
    {
      _id: '63655db821c8aa26f6df652d',
      price: 0,
      image: 'http://placehold.it/32x32',
      title: 'Dee Salas',
      description:
        'Cillum nisi tempor proident sunt adipisicing mollit nostrud ea laboris commodo aliquip exercitation esse. Amet proident dolore tempor nisi ipsum esse id. Minim in occaecat ea laborum tempor ea. Aute duis sunt cupidatat incididunt commodo officia ut irure laborum quis.\r\n',
    },
    {
      _id: '63655db844d31ab8ee279214',
      price: 1,
      image: 'http://placehold.it/32x32',
      title: 'Karla Espinoza',
      description:
        'Dolor nulla aliquip cillum enim eu proident sit amet quis occaecat. Sint incididunt reprehenderit ullamco cillum reprehenderit est enim nisi. Sit officia officia excepteur id deserunt in voluptate deserunt. In est culpa commodo laborum. Eiusmod velit commodo in sint ad sit aute ullamco consequat aliquip.\r\n',
    },
    {
      _id: '63655db85ea9d8afab7eba77',
      price: 2,
      image: 'http://placehold.it/32x32',
      title: 'Donovan Kirkland',
      description:
        'Adipisicing fugiat non dolor consequat excepteur et irure cupidatat culpa sunt magna. Officia et officia nisi Lorem nulla velit laboris cillum voluptate excepteur enim occaecat ullamco. Pariatur enim occaecat anim nulla occaecat veniam voluptate non sit. Ex do cupidatat anim enim aliqua ullamco fugiat duis pariatur veniam minim exercitation irure. Ex aliqua eu est consequat eu nulla. Ut sit laborum mollit nulla sint. Aliquip dolore sit Lorem qui.\r\n',
    },
    {
      _id: '63655db85fa27f7e55714aaf',
      price: 3,
      image: 'http://placehold.it/32x32',
      title: 'Michael Bailey',
      description:
        'Lorem mollit nulla et eu labore enim reprehenderit labore aliquip. Fugiat non magna aliquip amet minim proident in est duis magna aliquip. Adipisicing amet deserunt labore culpa eu do magna reprehenderit ullamco enim excepteur et sit. Enim ea adipisicing ipsum mollit duis duis eiusmod sint duis nostrud.\r\n',
    },
    {
      _id: '63655db83d2f6dbede19c01a',
      price: 4,
      image: 'http://placehold.it/32x32',
      title: 'Hayes Poole',
      description:
        'Ex veniam cupidatat nostrud ullamco nulla nulla do aute irure ut. Non veniam amet irure quis laborum eu occaecat nisi pariatur. Dolore anim esse nisi laboris commodo qui incididunt deserunt magna commodo occaecat magna adipisicing fugiat.\r\n',
    },
    {
      _id: '63655db8fae452965f30e306',
      price: 5,
      image: 'http://placehold.it/32x32',
      title: 'Wiggins Munoz',
      description:
        'Irure ut deserunt nisi mollit ea sint ea labore elit est ad amet magna nostrud. Pariatur amet sunt labore elit. Fugiat proident pariatur commodo ea ut elit. Minim ut in et commodo laborum ea nostrud irure ea minim. Labore cillum in velit eu est pariatur adipisicing irure cillum elit deserunt magna. Quis consequat sunt laboris non non ut reprehenderit qui cillum tempor ea. Est aliqua eu ad irure.\r\n',
    },
    {
      _id: '63655db89f80a0c91f6a35f3',
      price: 6,
      image: 'http://placehold.it/32x32',
      title: 'Walsh Forbes',
      description:
        'Proident exercitation velit labore adipisicing commodo sint ad. Ad magna ipsum do dolore veniam proident fugiat nulla fugiat non elit aliqua laboris adipisicing. Eiusmod anim aute eu mollit non ut enim commodo. Eiusmod ipsum magna amet ad. Ipsum cupidatat laboris mollit elit fugiat consequat commodo. Excepteur elit minim velit cupidatat magna voluptate sint.\r\n',
    },
    {
      _id: '63655db81c01c0abe1d338e8',
      price: 7,
      image: 'http://placehold.it/32x32',
      title: 'Knowles Hess',
      description:
        'Laborum sint ut eiusmod eu non velit nulla amet pariatur Lorem. Voluptate consectetur irure ea reprehenderit labore nostrud deserunt cillum occaecat. Ad laboris fugiat consectetur quis officia in incididunt sunt. Ut dolor pariatur ex incididunt voluptate irure.\r\n',
    },
    {
      _id: '63655db8798b02103b6a8757',
      price: 8,
      image: 'http://placehold.it/32x32',
      title: 'Paul Phillips',
      description:
        'Nisi amet laboris duis adipisicing nisi adipisicing dolor. Quis labore voluptate sint labore irure adipisicing irure elit do deserunt Lorem do. Laboris ea nulla amet consequat voluptate deserunt amet adipisicing do occaecat nisi occaecat eu reprehenderit. Ea voluptate eu ad incididunt ex voluptate sunt aliqua et exercitation labore nisi ad culpa. Excepteur excepteur minim cillum nulla amet eu officia proident esse duis amet mollit in.\r\n',
    },
    {
      _id: '63655db810e33fc0cf01524b',
      price: 9,
      image: 'http://placehold.it/32x32',
      title: 'Lillie Fischer',
      description:
        'Pariatur minim deserunt et tempor ullamco irure id dolore nisi quis ipsum anim cillum. Pariatur sunt irure ipsum fugiat fugiat aute pariatur non eu sint culpa. Id non nisi cupidatat non fugiat officia laborum consectetur.\r\n',
    },
  ];

  constructor() {}

  ToggleSideMenu(e: MouseEvent) {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }
}
