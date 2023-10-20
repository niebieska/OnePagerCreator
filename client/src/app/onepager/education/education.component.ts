import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Education } from 'src/models/cv';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../onepager.component.scss']
})
export class EducationComponent {
  @Input() educationList!: Education[];
  @Output() educationChanged = new EventEmitter<Education[]>();

  @ViewChild('educationModal') modalRef!: HTMLElement;

  newEducationEntry = new Education();

  constructor(private modalService: NgbModal) {}

  open(content: HTMLElement) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

}
