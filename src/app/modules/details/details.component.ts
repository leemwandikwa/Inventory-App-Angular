import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { threadId } from 'worker_threads';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  itemdetails:any;
  name:any;
  category:any;
  img:any;
  tag:any;
  state:any;
  description:any;
  date:any;
  id:any;
 
  

  constructor(public dialogRef: MatDialogRef<DetailsComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  // generatePdf(){
  //   const documentDefinition = { content: 'This is for testing.' };
  //   pdfMake.createPdf(documentDefinition).print();
  // }

  ngOnInit(): void {
    console.log(this.data)
    this.itemdetails = this.data?.rowData;
    console.log('item details', this.itemdetails);
    this.name= this.itemdetails['item-name'];
    console.log('item name', this.name);
    this.category= this.itemdetails['item-category']
    this.description= this.itemdetails['item-description']
    this.date= this.itemdetails['item-date']
    this.state= this.itemdetails['item-state']
    this.img= this.itemdetails['item-img']
    this.tag= this.itemdetails['item-tag']
    this.id= this.itemdetails['id']
  }
  
  //Closing modal
  closeModal(){
    this.dialogRef.close();
  }
  generatePDF() { 

    let docDefinition = {  
      header: 'Item  ' + this.id,  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
    };  

    pdfMake.createPdf(docDefinition).open();  
  }  

}
