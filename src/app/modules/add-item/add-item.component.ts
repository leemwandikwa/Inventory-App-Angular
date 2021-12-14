import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { InventoryService } from 'src/app/shared/services/inventory.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private apiService:InventoryService) { }

  ngOnInit(): void {
  }
   //Submission of form method
   onSubmit(f:NgForm){
    console.log(f.value)

    const payload = {
      "item-name": f.value.name,
      "item-description": f.value.description,
      "item-state": f.value.state,
      "item-category": f.value.selected,

      "item-date": f.value.date,
      "item-tag": [
      "HP",
      "laptop"
      ],
      "item-img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4MchLKUmVNdpGEcYNuzfc3g64grbtup9lQ&usqp=CAU"
    }

    this.apiService.AddItem(payload).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }
  //Closing modal
  closeModal(){
    this.dialogRef.close();
  }

}
