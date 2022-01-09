import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFunctionComponent } from './angular-function.component';

describe('AngularFunctionComponent', () => {
  let component: AngularFunctionComponent;
  let fixture: ComponentFixture<AngularFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
