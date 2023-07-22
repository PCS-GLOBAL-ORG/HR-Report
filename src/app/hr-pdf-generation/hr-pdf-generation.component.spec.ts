import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRPDFGenerationComponent } from './hr-pdf-generation.component';

describe('HRPDFGenerationComponent', () => {
  let component: HRPDFGenerationComponent;
  let fixture: ComponentFixture<HRPDFGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HRPDFGenerationComponent]
    });
    fixture = TestBed.createComponent(HRPDFGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
