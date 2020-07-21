import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarChordComponent } from './guitar-chord.component';

describe('GuitarChordComponent', () => {
  let component: GuitarChordComponent;
  let fixture: ComponentFixture<GuitarChordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarChordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarChordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
