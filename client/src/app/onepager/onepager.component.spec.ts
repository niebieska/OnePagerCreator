import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepagerComponent } from './onepager.component';

describe('OnepagerComponent', () => {
  let component: OnepagerComponent;
  let fixture: ComponentFixture<OnepagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnepagerComponent]
    });
    fixture = TestBed.createComponent(OnepagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
