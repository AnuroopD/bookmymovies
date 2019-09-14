import { HomeFilterPipe } from './home-filter.pipe';
import { async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

describe('HomeFilterPipe', () => {
  let pipe: HomeFilterPipe;
  const homePipeStub = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HomeFilterPipe,
          useValue: homePipeStub
        }
      ]
    });
  }));
  beforeEach(() => {
    pipe = TestBed.get(HomeFilterPipe);
  });
  it('can load instance', () => {
    // pipe.HomeFilterPipe.dateFormat = [];

    expect(pipe).toBeTruthy();
  });
});
