import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-sidebar',
  templateUrl: './google-sidebar.component.html',
  styleUrls: ['./google-sidebar.component.css'],
})
export class GoogleSidebarComponent implements OnInit {
  @Input() open: boolean;
  activeItem = 'notes';
  constructor() {}

  ngOnInit(): void {
    console.log(open);
  }
  setActiveItem(category) {
    this.activeItem = category;
  }
  changeOpen() {
    this.open = !this.open;
  }
}
