import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaterialComponent } from './home-material.component';

describe('HomeMaterialComponent', () => {
  let component: HomeMaterialComponent;
  let fixture: ComponentFixture<HomeMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
