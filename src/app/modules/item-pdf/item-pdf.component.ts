import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-item-pdf',
  templateUrl: './item-pdf.component.html',
  styleUrls: ['./item-pdf.component.css']
})
export class ItemPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
   
  }
  
  generatePDF() { 

    let docDefinition = {  
      header: 'C#Corner PDF Header',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
    };  

    pdfMake.createPdf(docDefinition).open();  
  }  
}
