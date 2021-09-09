import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyOptionsComponent } from './many-options.component';

describe('ManyOptionsComponent', () => {
  let component: ManyOptionsComponent;
  let fixture: ComponentFixture<ManyOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
