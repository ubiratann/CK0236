import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeLogadoPage } from './home-logado.page';

describe('HomeLogadoPage', () => {
  let component: HomeLogadoPage;
  let fixture: ComponentFixture<HomeLogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLogadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
