import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManyOptionsComponent } from 'src/app/components/many-options/many-options.component';
import { OneOptionComponent } from 'src/app/components/one-option/one-option.component';

import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewComponent, OneOptionComponent, ManyOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
