import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordPickerComponent } from './chord-picker.component';

describe('ChordPickerComponent', () => {
  let component: ChordPickerComponent;
  let fixture: ComponentFixture<ChordPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
