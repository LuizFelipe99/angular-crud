import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataClientComponent } from './data-client.component';

describe('DataClientComponent', () => {
  let component: DataClientComponent;
  let fixture: ComponentFixture<DataClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataClientComponent]
    });
    fixture = TestBed.createComponent(DataClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
