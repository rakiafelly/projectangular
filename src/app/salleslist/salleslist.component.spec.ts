import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleslistComponent } from './salleslist.component';

describe('SalleslistComponent', () => {
  let component: SalleslistComponent;
  let fixture: ComponentFixture<SalleslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
