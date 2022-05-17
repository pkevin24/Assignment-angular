import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscontentComponent } from './cardscontent.component';

describe('CardscontentComponent', () => {
  let component: CardscontentComponent;
  let fixture: ComponentFixture<CardscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
