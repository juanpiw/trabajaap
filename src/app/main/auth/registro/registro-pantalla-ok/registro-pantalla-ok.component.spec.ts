import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroPantallaOkComponent } from './registro-pantalla-ok.component';

describe('RegistroPantallaOkComponent', () => {
  let component: RegistroPantallaOkComponent;
  let fixture: ComponentFixture<RegistroPantallaOkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPantallaOkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPantallaOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
