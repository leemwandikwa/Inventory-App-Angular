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
  name:any;
  category:any;
  img:any;
  tag:any;
  state:any;
  description:any;
  date:any;
  inventoryItems:any={};

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
      .subscribe((res: any)=>{
        
        console.log(res);
        this.records = res;
        for(let i=0; i<this.records.length; i++){

          this.name= this.records[i]['item-name'];
          this.category= this.records[i]['item-category']
          this.description= this.records[i]['item-description']
          this.date= this.records[i]['item-date']
          this.state= this.records[i]['item-state']
          this.img= this.records[i]['item-img']
          this.tag= this.records[i]['item-tag']
          //records
        }

       

        
      })

  }


}
