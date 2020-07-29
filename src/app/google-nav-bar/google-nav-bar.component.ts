import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'google-nav-bar',
  templateUrl: './google-nav-bar.component.html',
  styleUrls: ['./google-nav-bar.component.css']
})
export class GoogleNavBarComponent implements OnInit {
searchFocus:Boolean=false;
sidebarStatus=true;
  constructor() { }

  ngOnInit(): void {
  }
searchStart(){
  this.searchFocus=!this.searchFocus;
}
openSidebar(){
  this.sidebarStatus=!this.sidebarStatus;
  console.log(this.sidebarStatus);
  
}
}
