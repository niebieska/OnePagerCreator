import { Component } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'onepager',
  templateUrl: './onepager.component.html',
  styleUrls: ['./onepager.component.scss']
})
export class OnepagerComponent {


  downloadOnePager(){
    var data = document.getElementById('onepager')!;
    html2canvas(data).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); // Adjust dimensions as needed
      pdf.save('horizontal.pdf');
    });
  }

}
