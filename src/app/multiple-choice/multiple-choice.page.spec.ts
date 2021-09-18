import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleChoicePage } from './multiple-choice.page';

describe('MultipleChoicePage', () => {
  let component: MultipleChoicePage;
  let fixture: ComponentFixture<MultipleChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
