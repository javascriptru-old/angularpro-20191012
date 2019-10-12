import { interval, of, combineLatest, queueScheduler, defer, timer, SchedulerLike, asyncScheduler } from 'rxjs';
import { delay, switchMap, tap, flatMap, map, repeat, delayWhen, concatMap, take, observeOn } from 'rxjs/operators';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
/*
- queueScheduler
- asyncScheduler
- asapScheduler
- VirtualTimeScheduler
*/


const o1 = of(1,2).pipe(observeOn(asyncScheduler));
const o2 = of(10);
const o = combineLatest(o1, o2);

o.subscribe(v => console.log(v));