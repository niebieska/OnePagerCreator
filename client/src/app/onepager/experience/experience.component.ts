import { Component, Input, OnInit } from '@angular/core';

import { Experience } from 'src/models/cv';

@Component({
  selector: 'experience-section',
  templateUrl: './experience.component.html',
  styleUrls: ['../onepager.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceList!: Experience[];

  ngOnChanges(change: any) {
    this.experienceList.push(new Experience());
  }

  ngOnInit(): void {
    this.experienceList.push(new Experience('', '', '', ''));
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  update() {
    const lastEntry = this.experienceList[this.experienceList.length-1];
    const isLastEntryTouched = lastEntry.role !== '' || lastEntry.industry !== '' 
      || lastEntry.project !== '' || lastEntry.responsibilities !== '';
    const isNextEntryAvaible = this.experienceList.length < 4 && isLastEntryTouched;
    
    if (isNextEntryAvaible) {
      this.experienceList.push(new Experience('', '', '', ''));
    }

    const secondToLastEntry = this.experienceList[this.experienceList.length-2];
    const isLastLineDeletable  = secondToLastEntry.role === '' && secondToLastEntry.industry === '' 
      && secondToLastEntry.project === '' && secondToLastEntry.responsibilities === '';

    if (isLastLineDeletable) {
      this.experienceList.splice(length-2, 1);
    }
  }
}
