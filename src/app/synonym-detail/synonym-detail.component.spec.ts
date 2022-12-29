import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymDetailComponent } from './synonym-detail.component';

describe('SynonymDetailComponent', () => {
  let component: SynonymDetailComponent;
  let fixture: ComponentFixture<SynonymDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynonymDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynonymDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
