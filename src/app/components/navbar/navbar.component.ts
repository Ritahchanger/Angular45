import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { MobilenavComponent } from '../mobilenav/mobilenav.component';


@Component({
  selector: 'app-navbar',
  imports: [ MatIconModule,MobilenavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  mobileNavbar : Boolean =  false;

  showNavbar = () =>{

    this.mobileNavbar = true;

  }

  hideNavbar = () => {

    this.mobileNavbar = false;

  }

}
