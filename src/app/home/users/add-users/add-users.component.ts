import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AjoutUserService} from '../../../services/ajout-user.service';
import {HttpClient} from '@angular/common/http';
import {ListProfilService} from '../../../services/list-profil.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  image: any;
  profil: any;
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient, private ad: AjoutUserService, private proSrv: ListProfilService) { }

  ngOnInit(): void {
    this.proSrv.getAllProfil().subscribe(
      dataProfil => {
        this.profil = dataProfil;
        console.log(this.profil);
      },
      error => {
        console.log(error.error.message);
      }
    );

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      avatar: new FormControl()
    }
    );
  }
  onFileSelect(event): any {
    this.image = event.target.files[0];
    console.log(this.image);
  }
  // tslint:disable-next-line:typedef
  get f() { return this.registerForm.controls; }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    const value = this.registerForm.value;
    const user = new FormData();
    // tslint:disable-next-line:no-unused-expression
    user.append('nom', value.lastName);
    user.append('prenom', value.firstName);
    user.append('email', value.email);
    user.append('password', value.password);
    user.append('role', value.role);
    user.append('adresse', value.adresse);
    user.append('telephone', value.telephone);
    user.append('avatar', this.image);
    this.ad.addUser(user).subscribe(
      data => {
        console.log(data );
      },
      error => {
        console.log('error');
      }
    );
}
}
