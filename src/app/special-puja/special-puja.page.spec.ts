import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SpecialPujaPage } from './special-puja.page';


describe('FormPage', () => {
  let component: SpecialPujaPage;
  let fixture: ComponentFixture<SpecialPujaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPujaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialPujaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
