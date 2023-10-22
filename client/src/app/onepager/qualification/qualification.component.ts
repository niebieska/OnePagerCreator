import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qualification-section',
  templateUrl: './qualification.component.html',
  styleUrls: ['../onepager.component.scss']
})
export class QualificationComponent implements OnInit {
  @Input() qualificationList!: string[];

  ngOnChanges(change: any) {
    this.qualificationList.push('');
  }

  ngOnInit(): void {
    this.qualificationList.push('');
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  update() {
    const length = this.qualificationList.length;
    
    if (this.qualificationList[length-1] !== '' && length < 10) {
      this.qualificationList.push('');
    }

    if (this.qualificationList[length-2] === '') {
      this.qualificationList.splice(length-2, 1);
    }
  }

}
