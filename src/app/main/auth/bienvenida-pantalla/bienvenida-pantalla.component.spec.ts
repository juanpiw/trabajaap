import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BienvenidaPantallaComponent } from './bienvenida-pantalla.component';

describe('BienvenidaPantallaComponent', () => {
  let component: BienvenidaPantallaComponent;
  let fixture: ComponentFixture<BienvenidaPantallaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidaPantallaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BienvenidaPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
