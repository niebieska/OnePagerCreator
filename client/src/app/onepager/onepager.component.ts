import { Component } from '@angular/core';
import { CV, Education } from 'src/models/cv';

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
}
