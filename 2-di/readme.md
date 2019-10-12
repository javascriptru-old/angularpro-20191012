@Component
@Directive
@Pipe
@Injectable


constuctor(@Inject(API_INJECTION_TOKEN) api)
- @Self() / @SkipSelf
- @Host()
- @Optional()



{ provide: API_INJECTION_TOKEN,
  useValue: 'api.mysite.com'
}



{ provide: UserService,
  useClass: UserService,
  deps: [LogService, ItemService]
  }

Platform, Compiler, NgZone - ReflectiveInjector => StaticInjector
Module, Component - ReflectiveInjector


{ provide: UserService,
  useFactory: function(authService) {
      if(authService.login){
        return new AdminService();
      }
      return new UserService();
  },
  deps: [AuthService]
  }



class UserService {

}

class AdminService {
    deleleAll() {

    }
}


{ 
  provide: UserService,
  useExisting: AdminService
}

function( user:  UserService) {

}


{ 
  provide: AdminService,
  useClass: AdminService
}