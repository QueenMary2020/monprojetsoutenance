import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMetierComponent } from './detail-metier.component';

describe('DetailMetierComponent', () => {
  let component: DetailMetierComponent;
  let fixture: ComponentFixture<DetailMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
