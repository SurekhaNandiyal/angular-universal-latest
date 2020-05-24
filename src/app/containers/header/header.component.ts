import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public links: Array<{ name: string; url: string }>;

  constructor() {}

  ngOnInit() {
    this.links = [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Contact-us',
        url: '/contact-us',
      },
      {
        name: 'Help',
        url: '/help',
      },
    ];
  }
}
