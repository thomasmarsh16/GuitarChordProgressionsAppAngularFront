import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarChordPageComponent } from './guitar-chord-page.component';

describe('GuitarChordPageComponent', () => {
  let component: GuitarChordPageComponent;
  let fixture: ComponentFixture<GuitarChordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarChordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarChordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
