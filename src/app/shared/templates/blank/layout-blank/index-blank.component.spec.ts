import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBlankComponent } from './index-blank.component';

describe('IndexBlankComponent', () => {
  let component: IndexBlankComponent;
  let fixture: ComponentFixture<IndexBlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexBlankComponent]
    });
    fixture = TestBed.createComponent(IndexBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
