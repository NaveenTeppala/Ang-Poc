import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataButtonComponent } from './get-data-button.component';

describe('GetDataButtonComponent', () => {
  let component: GetDataButtonComponent;
  let fixture: ComponentFixture<GetDataButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDataButtonComponent]
    });
    fixture = TestBed.createComponent(GetDataButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
