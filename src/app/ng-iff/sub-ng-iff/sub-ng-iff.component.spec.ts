import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNgIffComponent } from './sub-ng-iff.component';

describe('SubNgIffComponent', () => {
  let component: SubNgIffComponent;
  let fixture: ComponentFixture<SubNgIffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNgIffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNgIffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
