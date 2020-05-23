import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesClientsComponent } from './datatables-clients.component';

describe('DatatablesClientsComponent', () => {
  let component: DatatablesClientsComponent;
  let fixture: ComponentFixture<DatatablesClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
