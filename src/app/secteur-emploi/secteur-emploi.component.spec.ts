import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurEmploiComponent } from './secteur-emploi.component';

describe('SecteurEmploiComponent', () => {
  let component: SecteurEmploiComponent;
  let fixture: ComponentFixture<SecteurEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteurEmploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteurEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
