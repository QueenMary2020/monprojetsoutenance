import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestorientationComponent } from './testorientation.component';

describe('TestorientationComponent', () => {
  let component: TestorientationComponent;
  let fixture: ComponentFixture<TestorientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestorientationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestorientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
