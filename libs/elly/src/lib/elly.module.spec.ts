import { async, TestBed } from '@angular/core/testing';
import { EllyCompModule } from './elly.module';

describe('EllyCompModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EllyCompModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EllyCompModule).toBeDefined();
  });
});
