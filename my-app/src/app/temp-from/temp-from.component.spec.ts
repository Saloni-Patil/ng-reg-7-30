import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFromComponent } from './temp-from.component';

describe('TempFromComponent', () => {
  let component: TempFromComponent;
  let fixture: ComponentFixture<TempFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
