import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertPlayerComponent } from './upsert-player.component';

describe('UpsertPlayerComponent', () => {
  let component: UpsertPlayerComponent;
  let fixture: ComponentFixture<UpsertPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
