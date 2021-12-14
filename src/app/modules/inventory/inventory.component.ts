import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/shared/services/inventory.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private apiService:InventoryService, public detailsDialog:MatDialog) { }

  records:any;
  ngOnInit(): void {
    this.loadItems();
  }

  openDetails (item:any){
    const dialogConfig = new MatDialogConfig()
     dialogConfig.autoFocus = true;
     this.detailsDialog.open(DetailsComponent, {
      position: {top: '50px'},
      data: {rowData: item}
    });

  }

  loadItems(){

    this.apiService.GetItemsList()
      .subscribe((res)=>{
        
        console.log(res);
        this.records = res;
        
      })

  }


}
