import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeplazyComponent } from './deeplazy.component';

describe('DeeplazyComponent', () => {
  let component: DeeplazyComponent;
  let fixture: ComponentFixture<DeeplazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeplazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeplazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
