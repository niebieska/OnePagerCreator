import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { Qualification } from 'src/models/cv';

@Component({
  selector: 'qualification-section',
  templateUrl: './qualification.component.html',
  styleUrls: ['../onepager.component.scss']
})
export class QualificationComponent implements OnInit {
  @Input() qualificationList!: string[];

  ngOnInit(): void {
    this.qualificationList.push('');
    console.log(this.qualificationList);
  }

  trackByFn(index: any, item: any) {
    console.log({index, item});
    return index;
  }

  update() {
    console.log(this.qualificationList);
    this.qualificationList[this.qualificationList.length-1] !== ''
      ? this.qualificationList.push('')
      : null;
  }

}
