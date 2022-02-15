import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopnewsdeatilsPage } from './topnewsdeatils.page';

describe('TopnewsdeatilsPage', () => {
  let component: TopnewsdeatilsPage;
  let fixture: ComponentFixture<TopnewsdeatilsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnewsdeatilsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopnewsdeatilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
