import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnepagerComponent } from './onepager/onepager.component';

import { FormsModule } from '@angular/forms';
import { EducationComponent } from './onepager/education/education.component';
import { EducationModalComponent } from './modals/education-modal/education-modal.component';
import { QualificationComponent } from './onepager/qualification/qualification.component';
import { ExperienceComponent } from './onepager/experience/experience.component';
import { OnepagerService } from './onepager.service';

@NgModule({
  declarations: [
    AppComponent,
    OnepagerComponent,
    EducationComponent,
    EducationModalComponent,
    QualificationComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    OnepagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
