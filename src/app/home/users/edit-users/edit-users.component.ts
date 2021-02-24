import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ListProfilService} from '../../../services/list-profil.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  image: any;
  profil: any;
  user: any;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
              private auSrv: AuthService, private proSrv: ListProfilService) { }

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
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        profil: ['', Validators.required],
        adresse: ['', Validators.required],
        telephone: ['', Validators.required],
        avatar: new FormControl(),
      email: ['', Validators.required],
      }
    );

    const idUser = +this.route.snapshot.params[`id`];
    // @ts-ignore
    this.user = this.auSrv.getUserbyId(idUser).subscribe(
      dataUser => {
        this.user = dataUser;
        console.log(this.user);
        this.registerForm.patchValue(
          {
            nom: this.user.nom,
            prenom: this.user.prenom,
            email: this.user.email,
            adresse: this.user.adresse,
            telephone: this.user.telephone,
            profil: this.user.profil.id,
          }
        );
        // console.log( this.user.profil.id);
      }
    );
  }
  onFileSelect(event): any {
    this.image = event.target.files[0];
    console.log(this.image);
  }
  // tslint:disable-next-line:typedef
    get f() { return this.registerForm.controls; }
  onSubmit(): any {
   console.log(this.registerForm.value);
   this.submitted = true;
   const value = this.registerForm.value;
   const formData = new FormData();
   formData.append('nom', value.nom);
   formData.append('prenom', value.prenom);
   formData.append('email', value.email);
   formData.append('adresse', value.adresse);
   formData.append('telephone', value.telephone);
   formData.append('role', value.profil);
   formData.append('avatar', this.image);
    // @ts-ignore
   this.auSrv.putUserById(formData, +this.route.snapshot.params[`id`]).subscribe(
      data => {
        console.log(data );
      },
      error => {
        console.log('error');
      }
    );
  }
}
