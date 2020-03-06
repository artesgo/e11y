import { async, TestBed } from '@angular/core/testing';
import { EllyModule } from './elly.module';

describe('EllyCompModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EllyModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EllyModule).toBeDefined();
  });
});
