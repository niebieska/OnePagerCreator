import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Education } from 'src/models/cv';
import { ModalCommand, ResultDelete, ResultCreate, ResultDismiss, ResultUpdate } from './types';

@Component({
  selector: 'education-modal',
  templateUrl: './education-modal.component.html',
})
export class EducationModalComponent implements OnInit {
  @Input() dataFromParent!: ModalCommand;
  education!: Education;
  command!: ModalCommand['type'];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    const entry = this.dataFromParent.entry;
    this.education = new Education(entry.startYear || '2023', entry.endYear || '2023', entry.company, entry.competence);
    this.command = this.dataFromParent.type;
  }

  create() {
    const result: ResultCreate = { type: 'create', education: this.education };
    this.activeModal.close(result);
  }

  update() {
    const result: ResultUpdate = { type: 'update', index: this.dataFromParent.index, education: this.education };
    this.activeModal.close(result);
  }

  remove() {
    const result: ResultDelete = { type: 'delete', index: this.dataFromParent.index };
    this.activeModal.close(result);
  }

  closeModal() {
    const result: ResultDismiss = { type: 'dismiss' };
    this.activeModal.dismiss(result);
  }
}
