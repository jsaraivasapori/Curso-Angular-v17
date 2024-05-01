import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClassBindingExampleComponent } from './css-class-binding-example.component';

describe('CssClassBindingExampleComponent', () => {
  let component: CssClassBindingExampleComponent;
  let fixture: ComponentFixture<CssClassBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssClassBindingExampleComponent]
    });
    fixture = TestBed.createComponent(CssClassBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
