import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPlataformComponent } from './config-plataform.component';

describe('ConfigPlataformComponent', () => {
  let component: ConfigPlataformComponent;
  let fixture: ComponentFixture<ConfigPlataformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigPlataformComponent]
    });
    fixture = TestBed.createComponent(ConfigPlataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
