import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDialogCardsComponent } from './s-dialog-cards.component';

describe('SDialogCardsComponent', () => {
  let component: SDialogCardsComponent;
  let fixture: ComponentFixture<SDialogCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDialogCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDialogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
