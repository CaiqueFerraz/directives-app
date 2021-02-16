import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIffComponent } from './ng-iff.component';

describe('NgIffComponent', () => {
  let component: NgIffComponent;
  let fixture: ComponentFixture<NgIffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
