import { Component, ViewChild } from '@angular/core';
import { CV, Education, Qualification } from 'src/models/cv';
// @ts-ignore
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'onepager',
  templateUrl: './onepager.component.html',
  styleUrls: ['./onepager.component.scss']
})
export class OnepagerComponent {
  @ViewChild('imageRef') imageRef!: any;

  form: CV = new CV(
    '', // name
    '', // position
    '', // competences
    [], // languages
    [
      new Education('2020', '2023', 'Cap', 'lorem ipsum'),
      new Education('2023', '2024', 'Cap 2', 'lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs'),
    ], // education
    [
      'Back-end software development',
      'Front-end software development',
      'JavaScript, TypeScript'
    ], // qualification
    [
      {
        role: 'role 1',
        industry: 'industry 1',
        project: 'project 1',
        responsibilities: 'lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs'
      },
      {
        role: 'role 2',
        industry: 'industry 2',
        project: 'project 2',
        responsibilities: 'lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs'
      },
    ] // experience
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

  url: string = "assets/user.svg";
	msg = "";
	
	selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			// this.msg = 'You must select an image';
			return;
		}
		
		const mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			// this.msg = "Only images are supported";
			return;
		}
		
		const reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (event) => {
			this.msg = "";
			this.url = reader.result! as string; 
		}
	}

}
