import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridCardPage } from './grid-card.page';

describe('GridCardPage', () => {
  let component: GridCardPage;
  let fixture: ComponentFixture<GridCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
