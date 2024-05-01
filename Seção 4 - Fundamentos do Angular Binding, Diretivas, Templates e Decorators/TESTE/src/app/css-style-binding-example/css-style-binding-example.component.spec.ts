import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStyleBindingExampleComponent } from './css-style-binding-example.component';

describe('CssStyleBindingExampleComponent', () => {
  let component: CssStyleBindingExampleComponent;
  let fixture: ComponentFixture<CssStyleBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssStyleBindingExampleComponent]
    });
    fixture = TestBed.createComponent(CssStyleBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
