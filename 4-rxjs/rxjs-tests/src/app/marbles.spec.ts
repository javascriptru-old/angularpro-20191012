import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { concat } from 'rxjs';
import { delay } from 'rxjs/operators';


describe('TEST', () => {
  it('simple', () => {
    const source = cold('x-x-x|');
    const expected = cold('x-x-x|');
    expect(source).toBeObservable(expected);
  });

  it('concat', () => {
    const one = cold('x-x|', { x: 'somestring'});
    const two = cold('-y|', { y : 999});
    const expected = cold('a-a-b|', { a:  'somestring', b: 999 });
    const source = concat(one, two);
    
    expect(source).toBeObservable(expected);
  });


  it('delay', () => {
    const o = cold('a|', {a :1 }).pipe(delay(20, getTestScheduler()));
    expect(o).toBeObservable(cold('--a|', { a : 1 }));
  });
});

/*
" - " - timeframe
" a " - any data
" | " - completion
" # " - error
*/