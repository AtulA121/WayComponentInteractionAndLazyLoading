import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChieldComponent } from './sub-chield.component';

describe('SubChieldComponent', () => {
  let component: SubChieldComponent;
  let fixture: ComponentFixture<SubChieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubChieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
