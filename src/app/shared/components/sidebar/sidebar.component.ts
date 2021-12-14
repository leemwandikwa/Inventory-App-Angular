import { Component, OnInit } from '@angular/core';
import { AddItemComponent } from 'src/app/modules/add-item/add-item.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public newItemDialog:MatDialog) { }

  ngOnInit(): void {
  }

  addNewItem(){
    const dialogConfig = new MatDialogConfig()
     dialogConfig.autoFocus = true;
     this.newItemDialog.open(AddItemComponent, {
      position: {top: '50px'},
      
    });

  }

}
