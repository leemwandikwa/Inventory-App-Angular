import { Component, OnInit, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarDashboard: EventEmitter<any> = new EventEmitter ()
  isClicked = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.toggleSideBarDashboard.emit();
    
  }

}
