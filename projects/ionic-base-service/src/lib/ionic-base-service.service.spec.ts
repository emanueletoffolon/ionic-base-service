import { TestBed } from '@angular/core/testing';
import {IonicBaseService} from './ionic-base-service.service';



describe('BaseServiceService', () => {
  let service: IonicBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
