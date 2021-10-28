import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeurComponent } from './campeur.component';

describe('CampeurComponent', () => {
  let component: CampeurComponent;
  let fixture: ComponentFixture<CampeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
