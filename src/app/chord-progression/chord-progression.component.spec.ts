import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordProgressionComponent } from './chord-progression.component';

describe('ChordProgressionComponent', () => {
  let component: ChordProgressionComponent;
  let fixture: ComponentFixture<ChordProgressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordProgressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
