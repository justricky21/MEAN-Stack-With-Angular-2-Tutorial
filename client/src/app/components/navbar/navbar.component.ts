import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngFlashMessagesModule: NgFlashMessageService
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.ngFlashMessagesModule.showFlashMessage({ messages: ['You are logged out'] });
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
