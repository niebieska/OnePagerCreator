import { Component, ViewChild, Input } from '@angular/core';
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
  @Input() form!: CV;
  // form: CV = new CV(
  //   '', // name
  //   '', // position
  //   '', // competences
  //   [], // languages
  //   [
  //     new Education('2020', '2023', 'Cap', 'lorem ipsum'),
  //     new Education('2023', '2024', 'Cap 2', 'lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs'),
  //     // {
  //     //   "startYear": "2020",
  //     //   "endYear": "2023",
  //     //   "company": "Cap",
  //     //   "competence": "lorem ipsum"
  //     // },
  //     // {
  //     //   "startYear": "2023",
  //     //   "endYear": "2024",
  //     //   "company": "Cap 2",
  //     //   "competence": "lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs"
  //     // }
  //   ], // education
  //   [
  //     'Back-end software development',
  //     'Front-end software development',
  //     'JavaScript, TypeScript'
  //   ], // qualification
  //   [
  //     {
  //       role: 'role 1',
  //       industry: 'industry 1',
  //       project: 'project 1',
  //       responsibilities: 'lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs'
  //     },
  //     {
  //       role: 'role 2',
  //       industry: 'industry 2',
  //       project: 'project 2',
  //       responsibilities: 'lorem ipsum sdfsdfsdfsdfsdfsdf sdfsd sdfsd sdfs'
  //     },
  //   ] // experience
  // );

  printJson() {
    console.log(this.form);
  }

  downloadOnePager() {
    var data = document.getElementById('onepager')!;
    html2canvas(data, { scale: 1 }).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('landscape', 'px', 'a4');
      pdf.addImage(imgData, 'JPEG', 20, 20, 600, 360); // Adjust dimensions as needed
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
