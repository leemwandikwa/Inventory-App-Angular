import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  itemdetails:any;
  

  constructor(public dialogRef: MatDialogRef<DetailsComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  // generatePdf(){
  //   const documentDefinition = { content: 'This is for testing.' };
  //   pdfMake.createPdf(documentDefinition).print();
  // }

  ngOnInit(): void {
    console.log(this.data)
    this.itemdetails = this.data.rowData;
  }
  
  //Closing modal
  closeModal(){
    this.dialogRef.close();
  }

}
