import { Component } from '@angular/core';
import { CV, Education } from 'src/models/cv';
// @ts-ignore
import jspdf from 'jspdf';
// @ts-ignore
import html2canvas from 'html2canvas';

@Component({
  selector: 'onepager',
  templateUrl: './onepager.component.html',
  styleUrls: ['./onepager.component.scss']
})
export class OnepagerComponent {
  newEducationEntry = new Education();

  form: CV = new CV(
    '', // name
    '', // surname
    '', // position
    '', // competences
    [], // languages
    [
      new Education('2020', '2023', 'Cap', 'lorem ipsum'),
      new Education('2023', '2024', 'Cap 2', 'lorem ipsum 2'),
    ], // education
  );

  downloadOnePager(){
    var data = document.getElementById('onepager')!;
    html2canvas(data).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); // Adjust dimensions as needed
      pdf.save('horizontal.pdf');
    });
  }

}
