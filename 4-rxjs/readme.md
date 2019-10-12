Subject

Observable + Observer



Observable.create({

    observer.next() ................

}).subscribe();


subject.next();
subject.subscribe();


AuthSerice.isLogin().subscribe()


AuthSerice {

  isLogin$$

  isLogin() {
    return isLogin$$.asObservable();
  }

  doLogin() {
    isLogin$$.next(true);
  }

}



Hot/Cold


TV      - hot    - Subject     
Youtube - cold   - Observable


