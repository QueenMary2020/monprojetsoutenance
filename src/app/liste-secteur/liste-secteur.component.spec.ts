import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSecteurComponent } from './liste-secteur.component';

describe('ListeSecteurComponent', () => {
  let component: ListeSecteurComponent;
  let fixture: ComponentFixture<ListeSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
