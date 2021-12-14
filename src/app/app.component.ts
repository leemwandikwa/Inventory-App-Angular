import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventoryApp';

  sideBarOpen = true;

  ngOnInit(): void {
    
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
