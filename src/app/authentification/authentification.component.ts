import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  constructor(private connexion: AuthService, private router: Router) { }
  authentifdata = {
    email: '',
    password: ''
  };
  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
authentif(){
    this.connexion.authentif(this.authentifdata).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        const tokenDecode = this.connexion.decodeToken(data.token);
        console.log(tokenDecode);
        // tslint:disable-next-line:triple-equals
        if ( tokenDecode.roles[0] == 'ROLE_ADMIN'){
          this.router.navigate(['home/user/list']);
        }
      }
    );
}
}
