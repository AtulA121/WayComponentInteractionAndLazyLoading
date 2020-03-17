import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubParentComponent } from './sub-parent.component';

describe('SubParentComponent', () => {
  let component: SubParentComponent;
  let fixture: ComponentFixture<SubParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
