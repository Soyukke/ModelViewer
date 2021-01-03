import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdataComponent } from './dropdata.component';

describe('DropdataComponent', () => {
  let component: DropdataComponent;
  let fixture: ComponentFixture<DropdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
