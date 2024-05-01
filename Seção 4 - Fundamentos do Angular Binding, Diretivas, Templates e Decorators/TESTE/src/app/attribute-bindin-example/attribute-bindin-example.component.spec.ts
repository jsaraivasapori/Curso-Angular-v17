import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindinExampleComponent } from './attribute-bindin-example.component';

describe('AttributeBindinExampleComponent', () => {
  let component: AttributeBindinExampleComponent;
  let fixture: ComponentFixture<AttributeBindinExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeBindinExampleComponent]
    });
    fixture = TestBed.createComponent(AttributeBindinExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
