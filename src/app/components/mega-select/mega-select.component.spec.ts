import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSelectComponent } from './mega-select.component';

describe('MegaSelectComponent', () => {
  let component: MegaSelectComponent;
  let fixture: ComponentFixture<MegaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
