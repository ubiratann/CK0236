import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDeslogadoPage } from './home-deslogado.page';

describe('HomeDeslogadoPage', () => {
  let component: HomeDeslogadoPage;
  let fixture: ComponentFixture<HomeDeslogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDeslogadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDeslogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
