import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TarifComponent } from './tarif.component';
import { TarifItemComponent } from 'src/app/components/tarif-item/tarif-item.component';
import { TarifUploadDownloadComponent } from 'src/app/components/tarif-upload-download/tarif-upload-download.component';
import { HttpClientModule } from '@angular/common/http';
describe('TarifComponent', () => {
  let component: TarifComponent;
  let fixture: ComponentFixture<TarifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [   TarifItemComponent,
        TarifComponent,
        TarifUploadDownloadComponent],
        imports: [HttpClientModule]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
