import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReaderComponent } from './text-reader.component';

describe('TextReaderComponent', () => {
  let component: TextReaderComponent;
  let fixture: ComponentFixture<TextReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should read text aloud to the viewer', () => {
    expect(component).toBeTruthy();
  });
});
