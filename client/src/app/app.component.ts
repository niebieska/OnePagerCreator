import { Component, OnInit } from '@angular/core';
import { OnepagerService } from './onepager.service';
import { CV, Education } from 'src/models/cv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userCV = new CV('', '', '', [], [], []);

  constructor(private onepagerService: OnepagerService) {}

  ngOnInit(): void {
    this.onepagerService.fetchJson().subscribe(json => {
      console.log(json);
      this.userCV = this.parseJsonToModel(json);
    });
  }

  private parseJsonToModel(json: Record<string, any>): CV {
    const education: Education[] = json['education'].map((e: any) => new Education(e.startYear, e.endYear, e.company, e.competence));
    const x = {
      name: json['name'], 
      position: json['position'],
      competences: json['position'],
      languages: json['languages'],
      education: education,
      qualification: json['qualification'],
      experience: json['experience']
    };
    console.log(x);
    return x;
  }

  sendJson(json: CV) {
    this.onepagerService.sendCV(json);
  }
}