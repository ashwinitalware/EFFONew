import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LodgingeditprofilePage } from './lodgingeditprofile.page';

describe('LodgingeditprofilePage', () => {
  let component: LodgingeditprofilePage;
  let fixture: ComponentFixture<LodgingeditprofilePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingeditprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LodgingeditprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
