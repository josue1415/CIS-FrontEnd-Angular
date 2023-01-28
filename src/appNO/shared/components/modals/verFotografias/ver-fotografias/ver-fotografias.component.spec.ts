import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFotografiasComponent } from './ver-fotografias.component';

describe('VerFotografiasComponent', () => {
  let component: VerFotografiasComponent;
  let fixture: ComponentFixture<VerFotografiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFotografiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFotografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
