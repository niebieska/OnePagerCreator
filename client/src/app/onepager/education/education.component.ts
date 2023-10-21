import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Education } from 'src/models/cv';
import { EducationModalComponent } from 'src/app/modals/education-modal/education-modal.component';
import { ModalCommand, ResultCreate, ResultUpdate, ResultDismiss, ResultDelete } from 'src/app/modals/education-modal/types';

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

  constructor(private modalService: NgbModal) {};

  openModalCreate() {
    this.openModal({type: 'create-entry', index: this.educationList.length, entry: new Education()});
  }

  openModalUpdate(index: number, education: Education) {
    const entry = new Education(education.startYear, education.endYear, education.company, education.competence);
    this.openModal({type: 'update-entry', index, entry});
  }

  openModal(command: ModalCommand) {
    const modalRef = this.modalService.open(EducationModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      }
    );

    modalRef.componentInstance.dataFromParent = command;

    modalRef.result.then((result) => {
      this.handleModalClose(result)
    }, (reason) => {
      console.log({reason});
    });
  }

  private handleModalClose(result: ResultCreate | ResultUpdate | ResultDismiss | ResultDelete) {
    switch(result.type) {
      case 'create':
        this.educationList.push(result.education);
        break;
      case 'update': 
        this.educationList[result.index] = result.education;
        break;
      case 'delete':
        this.educationList.splice(result.index, 1);
        break;
    }
  }

}
