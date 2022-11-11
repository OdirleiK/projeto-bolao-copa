import { UserService } from './../../service/user.service';
import { Observable } from 'rxjs';
import { Component } from "@angular/core";
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent{

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {

    this.user$ = userService.getUser();
    console.log(this.user$);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
