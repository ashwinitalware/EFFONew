import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LodgingshortlistedPage } from './lodgingshortlisted.page';

describe('LodgingshortlistedPage', () => {
  let component: LodgingshortlistedPage;
  let fixture: ComponentFixture<LodgingshortlistedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingshortlistedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LodgingshortlistedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
