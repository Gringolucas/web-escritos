import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEscritoComponent } from './nuevo-escrito.component';

describe('NuevoEscritoComponent', () => {
  let component: NuevoEscritoComponent;
  let fixture: ComponentFixture<NuevoEscritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoEscritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
